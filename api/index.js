require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Serve static frontend files
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Initialize Prisma Client with driver adapter
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Resolve table initialization immediately as it is handled by prisma generate and db push
const initDbPromise = Promise.resolve();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER || 'javacsedscs@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

// API Routes

app.post('/api/send-otp', async (req, res) => {
    await initDbPromise;
    const { roll, email } = req.body;
    console.log(`[API] Received send-otp request for roll: ${roll}, email: ${email}`);

    if (!roll || !email) {
        console.warn(`[API] Send-otp validation failed: roll and email are required`);
        return res.status(400).json({ error: 'Roll and Email required' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const timestamp = Date.now();

    try {
        console.log(`[API] Upserting OTP into PostgreSQL database via Prisma`);
        await prisma.otps.upsert({
            where: { roll },
            update: {
                otp,
                email,
                timestamp: BigInt(timestamp)
            },
            create: {
                roll,
                otp,
                email,
                timestamp: BigInt(timestamp)
            }
        });
        console.log(`[API] OTP saved to DB successfully. Sending email...`);

        await transporter.sendMail({
            from: process.env.GMAIL_USER || 'javacsedscs@gmail.com',
            to: email,
            subject: 'Python Assessment Login Verification',
            text: `Your verification code is: ${otp}. It will expire in 10 minutes.`
        });
        console.log(`[API] Verification code email sent to: ${email}`);
        res.json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        console.error('[API] Error in /api/send-otp:', error.stack || error);
        res.status(500).json({ error: 'Failed to send OTP' });
    }
});

app.post('/api/verify-otp', async (req, res) => {
    await initDbPromise;
    const { roll, code } = req.body;
    console.log(`[API] Received verify-otp request for roll: ${roll}`);

    if (!roll || !code) {
        console.warn(`[API] Verify-otp validation failed: roll and code are required`);
        return res.status(400).json({ error: 'Roll and Code required' });
    }

    try {
        console.log(`[API] Querying OTP record for roll: ${roll}`);
        const record = await prisma.otps.findUnique({
            where: { roll }
        });

        if (!record) {
            console.warn(`[API] No OTP record found for roll: ${roll}`);
            return res.status(400).json({ error: 'No OTP requested for this roll number' });
        }
        
        if (Date.now() - Number(record.timestamp) > 10 * 60 * 1000) {
            console.warn(`[API] OTP expired for roll: ${roll}`);
            return res.status(400).json({ error: 'OTP expired' });
        }
        
        if (record.otp === code) {
            console.log(`[API] OTP verification succeeded for roll: ${roll}. Deleting OTP record...`);
            await prisma.otps.delete({
                where: { roll }
            });
            console.log(`[API] OTP record deleted. Verification complete.`);
            res.json({ success: true, message: 'Verified' });
        } else {
            console.warn(`[API] Invalid OTP code entered for roll: ${roll}`);
            res.status(400).json({ error: 'Invalid OTP' });
        }
    } catch (error) {
        console.error('[API] Error in /api/verify-otp:', error.stack || error);
        res.status(500).json({ error: 'Failed to verify OTP' });
    }
});

app.post('/api/send-pdf', async (req, res) => {
    const { toEmail, pdfBase64, filename, isConsolidated } = req.body;
    console.log(`[API] Received send-pdf request. Target: ${toEmail}, Filename: ${filename}`);

    if (!toEmail || !pdfBase64) {
        console.warn(`[API] Send-pdf validation failed: toEmail and pdfBase64 are required`);
        return res.status(400).json({ error: 'Email and PDF required' });
    }
    
    const mailOptions = {
        from: process.env.GMAIL_USER || 'javacsedscs@gmail.com',
        to: toEmail,
        subject: isConsolidated ? 'Consolidated Assessment Report' : 'Your Python Assessment Report',
        text: isConsolidated ? 'Please find the consolidated report attached.' : 'Please find your individual assessment report attached.',
        attachments: [
            {
                filename: filename || 'report.pdf',
                content: pdfBase64.split("base64,")[1], // Remove the data URI prefix
                encoding: 'base64'
            }
        ]
    };

    try {
        console.log(`[API] Dispatching report email via nodemailer...`);
        await transporter.sendMail(mailOptions);
        console.log(`[API] Report email sent successfully to ${toEmail}`);
        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('[API] Error in /api/send-pdf:', error.stack || error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Sync results / progress / heartbeat to PostgreSQL via Prisma
app.post('/api/results', async (req, res) => {
    await initDbPromise;
    console.log(`[API] Received POST request to /api/results`);
    console.log(`[API] Payload received:`, JSON.stringify(req.body, null, 2));

    const { 
        roll, name, branch, marks, attempts, status, 
        timestamp, questionDetails, timeTaken, lastActiveStr, lastSyncStr
    } = req.body;

    if (!roll) {
        console.warn(`[API] Validation failed: Roll number is missing`);
        return res.status(400).json({ error: 'Roll number required' });
    }
    console.log(`[API] Validation success for roll number: ${roll}`);

    try {
        console.log(`[API] Querying existing results record for roll: ${roll}`);
        const existing = await prisma.results.findUnique({
            where: { roll }
        });

        let dbResponse;
        if (existing) {
            console.log(`[API] Record exists. Performing Prisma update for roll: ${roll}`);
            
            // Critical security check: Do not let an ACTIVE or IDLE heartbeat override a SUBMITTED exam status
            if (existing.status === 'SUBMITTED' && (status === 'ACTIVE' || status === 'IDLE')) {
                console.log(`[API] Roll ${roll} is already SUBMITTED. Heartbeat update ignored to prevent state demotion.`);
                return res.json({ success: true, message: 'Exam is already submitted. Heartbeat ignored.' });
            }

            const updateData = {};
            if (name !== undefined && name !== null && name !== '') updateData.name = name;
            if (branch !== undefined && branch !== null && branch !== '') updateData.branch = branch;
            if (marks !== undefined && marks !== null) updateData.marks = marks;
            if (attempts !== undefined && attempts !== null) updateData.attempts = attempts;
            if (status !== undefined && status !== null && status !== '') updateData.status = status;
            if (timestamp !== undefined && timestamp !== null && timestamp !== '') updateData.timestamp = timestamp;
            if (questionDetails !== undefined && questionDetails !== null) updateData.question_details = questionDetails;
            if (timeTaken !== undefined && timeTaken !== null) updateData.time_taken = timeTaken;
            if (lastActiveStr !== undefined && lastActiveStr !== null && lastActiveStr !== '') updateData.last_active_str = lastActiveStr;
            if (lastSyncStr !== undefined && lastSyncStr !== null && lastSyncStr !== '') updateData.last_sync_str = lastSyncStr;
            
            const reqStudentId = req.body.studentId || req.body.student_id;
            if (reqStudentId !== undefined && reqStudentId !== null && reqStudentId !== '') updateData.student_id = reqStudentId;
            
            const reqExamId = req.body.examId || req.body.exam_id;
            if (reqExamId !== undefined && reqExamId !== null && reqExamId !== '') updateData.exam_id = reqExamId;
            
            const reqPercentage = req.body.percentage;
            if (reqPercentage !== undefined && reqPercentage !== null) {
                updateData.percentage = reqPercentage;
            } else if (marks !== undefined && marks !== null) {
                updateData.percentage = (marks / 50.0) * 100;
            }

            console.log(`[API] Update payload:`, JSON.stringify(updateData, null, 2));

            dbResponse = await prisma.results.update({
                where: { roll },
                data: updateData
            });
            console.log(`[API] Prisma update execution completed successfully`);
        } else {
            console.log(`[API] Record does not exist. Performing Prisma create for roll: ${roll}`);
            
            const createData = {
                roll,
                name: name !== undefined ? name : null,
                branch: branch !== undefined ? branch : null,
                marks: marks !== undefined ? marks : 0,
                attempts: attempts !== undefined ? attempts : 0,
                status: status !== undefined ? status : "ACTIVE",
                timestamp: timestamp !== undefined ? timestamp : null,
                question_details: questionDetails !== undefined ? questionDetails : null,
                time_taken: timeTaken !== undefined ? timeTaken : 0,
                last_active_str: lastActiveStr !== undefined ? lastActiveStr : null,
                last_sync_str: lastSyncStr !== undefined ? lastSyncStr : null,
                student_id: (req.body.studentId || req.body.student_id) || roll,
                exam_id: (req.body.examId || req.body.exam_id) || 'PYTHON_LAB_2026',
                percentage: req.body.percentage !== undefined ? req.body.percentage : (marks !== undefined ? (marks / 50.0) * 100 : 0)
            };

            console.log(`[API] Create payload:`, JSON.stringify(createData, null, 2));

            dbResponse = await prisma.results.create({
                data: createData
            });
            console.log(`[API] Prisma create execution completed successfully`);
        }
        
        console.log(`[API] Database response:`, JSON.stringify(dbResponse, null, 2));
        res.json({ success: true, message: 'Result synced successfully' });
    } catch (error) {
        console.error('[API] Error saving result. Stack trace:', error.stack || error);
        res.status(500).json({ error: 'Database write failed', details: error.message });
    }
});

// Fetch all student records
app.get('/api/results', async (req, res) => {
    await initDbPromise;
    console.log(`[API] Received GET request to /api/results`);
    try {
        const rows = await prisma.results.findMany();
        console.log(`[API] Fetched ${rows.length} rows successfully from PostgreSQL`);
        const mapped = {};
        rows.forEach(row => {
            mapped[row.roll] = {
                roll: row.roll,
                name: row.name,
                branch: row.branch,
                marks: row.marks,
                attempts: row.attempts,
                status: row.status,
                timestamp: row.timestamp,
                questionDetails: row.question_details,
                timeTaken: row.time_taken,
                lastActiveStr: row.last_active_str,
                lastSyncStr: row.last_sync_str,
                studentId: row.student_id,
                examId: row.exam_id,
                percentage: row.percentage
            };
        });
        res.json(mapped);
    } catch (error) {
        console.error('[API] Error fetching results:', error.stack || error);
        res.status(500).json({ error: 'Database read failed' });
    }
});

// Fetch a single student record
app.get('/api/results/:roll', async (req, res) => {
    await initDbPromise;
    const { roll } = req.params;
    console.log(`[API] Received GET request to /api/results/${roll}`);
    try {
        const row = await prisma.results.findUnique({
            where: { roll }
        });
        
        if (!row) {
            console.log(`[API] Result for roll: ${roll} does not exist`);
            return res.json({ exists: false });
        }
        
        console.log(`[API] Result for roll: ${roll} retrieved successfully`);
        res.json({
            exists: true,
            data: {
                roll: row.roll,
                name: row.name,
                branch: row.branch,
                marks: row.marks,
                attempts: row.attempts,
                status: row.status,
                timestamp: row.timestamp,
                questionDetails: row.question_details,
                timeTaken: row.time_taken,
                lastActiveStr: row.last_active_str,
                lastSyncStr: row.last_sync_str,
                studentId: row.student_id,
                examId: row.exam_id,
                percentage: row.percentage
            }
        });
    } catch (error) {
        console.error('[API] Error fetching single result:', error.stack || error);
        res.status(500).json({ error: 'Database read failed' });
    }
});

// Delete a student record (Allow Retest Score Reset)
app.delete('/api/results/:roll', async (req, res) => {
    await initDbPromise;
    const { roll } = req.params;
    console.log(`[API] Received DELETE request to /api/results/${roll}`);
    try {
        await prisma.results.delete({
            where: { roll }
        });
        console.log(`[API] Successfully deleted results record for roll: ${roll}`);
        res.json({ success: true, message: 'Result deleted successfully' });
    } catch (error) {
        console.error('[API] Error deleting result:', error.stack || error);
        res.status(500).json({ error: 'Database delete failed' });
    }
});

// Local HTTP Server Startup logic
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`[API] Server is listening on port ${PORT}`);
    });
}

module.exports = app;

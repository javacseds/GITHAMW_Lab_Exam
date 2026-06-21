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

async function seedDefaultStudents() {
    console.log("[SEED] Running database seeding...");
    const requestedRolls = ["238U1A0422", "238U1A0439", "238U1A0440", "238U1A0434", "238U1A0520"];
    for (const r of requestedRolls) {
        try {
            await prisma.results.upsert({
                where: { roll: r },
                update: {},
                create: {
                    roll: r,
                    name: "",
                    branch: "",
                    department: "",
                    section: "",
                    semester: "",
                    academic_year: "",
                    status: "Not Started",
                    exam_permission: "Allowed"
                }
            });
        } catch (err) {
            console.error(`[SEED] Failed to seed requested roll ${r}:`, err);
        }
    }
    
    try {
        const count = await prisma.results.count();
        if (count <= requestedRolls.length + 2) {
            console.log("[SEED] Results database is empty. Seeding 54 default roster students...");
            const roster = [
              { name: "Anjali",                    roll: "238U1A0568", branch: "B.Tech CSE" },
              { name: "Krishna",                   roll: "238U1A0593", branch: "B.Tech CSE" },
              { name: "Suri Snehanjali",           roll: "238U1A0507", branch: "B.Tech CSE" },
              { name: "Kunta Samatha",             roll: "238U1A0412", branch: "B.Tech CSE" },
              { name: "Lakshmi Bantrothu",         roll: "238U1A0504", branch: "B.Tech CSE" },
              { name: "Pravallika",                roll: "238U1A0505", branch: "B.Tech CSE" },
              { name: "Rajoli",                    roll: "238U1A0573", branch: "B.Tech CSE" },
              { name: "Gaswetha",                  roll: "238U1A0565", branch: "B.Tech CSE" },
              { name: "Dharamani",                 roll: "238U1A0595", branch: "B.Tech CSE" },
              { name: "Chitha",                    roll: "238U1A0533", branch: "B.Tech CSE" },
              { name: "Kalyani",                   roll: "238U1A0509", branch: "B.Tech CSE" },
              { name: "Suvaneswari",               roll: "238U1A0569", branch: "B.Tech CSE" },
              { name: "Jyothika Reddy",            roll: "238U1A0576", branch: "B.Tech CSE" },
              { name: "Lakshmi Devi Pollakati",    roll: "238U1A0566", branch: "B.Tech CSE" },
              { name: "Pravallika",                roll: "238U1A0574", branch: "B.Tech CSE" },
              { name: "Mukkamalla",                roll: "238U1A0554", branch: "B.Tech CSE" },
              { name: "Keerthana",                 roll: "238U1A0547", branch: "B.Tech CSE" },
              { name: "Priya",                     roll: "238U1A0522", branch: "B.Tech CSE" },
              { name: "Jainabi",                   roll: "238U1A0527", branch: "B.Tech CSE" },
              { name: "Yesha",                     roll: "238U1A0559", branch: "B.Tech CSE" },
              { name: "Hemalatha",                 roll: "238U1A0510", branch: "B.Tech CSE" },
              { name: "Pending Name (238U1A3307)", roll: "238U1A3307", branch: "B.Tech CSE" },
              { name: "Pending Name (238U1A0528)", roll: "238U1A0528", branch: "B.Tech CSE" },
              { name: "Lakshminarasamma",          roll: "238U1A0536", branch: "B.Tech CSE" },
              { name: "Param Archana",             roll: "238U1A0544", branch: "B.Tech CSE" },
              { name: "Keerthana Jinka",           roll: "238U1A0535", branch: "B.Tech CSE" },
              { name: "Pranaya Sri",               roll: "238U1A0555", branch: "B.Tech CSE" },
              { name: "Varshitha",                 roll: "238U1A0513", branch: "B.Tech CSE" },
              { name: "Yannam",                    roll: "238U1A0592", branch: "B.Tech CSE" },
              { name: "Devi",                      roll: "238U1A0515", branch: "B.Tech CSE" },
              { name: "Sneha",                     roll: "238U1A0583", branch: "B.Tech CSE" },
              { name: "Chandrika",                 roll: "238U1A0585", branch: "B.Tech CSE" },
              { name: "Bhumika Rama Bhumika",      roll: "238U1A3310", branch: "B.Tech CSE AIML" },
              { name: "Hitha Pathipati",           roll: "238U1A3319", branch: "B.Tech CSE AIML" },
              { name: "Machupalle",                roll: "238U1A0421", branch: "B.Tech ECE" },
              { name: "Swami Golla",               roll: "238U1A0413", branch: "B.Tech ECE" },
              { name: "Pooja",                     roll: "238U1A0415", branch: "B.Tech ECE" },
              { name: "Mamatha",                   roll: "238U1A0443", branch: "B.Tech ECE" },
              { name: "Manasa",                    roll: "238U1A0416", branch: "B.Tech ECE" },
              { name: "Navya Sree",                roll: "238U1A0434", branch: "B.Tech ECE" },
              { name: "Hemalatha",                 roll: "238U1A0417", branch: "B.Tech ECE" },
              { name: "Dadana",                    roll: "238U1A0428", branch: "B.Tech ECE" },
              { name: "Venkata Siri",              roll: "248U5A0404", branch: "B.Tech ECE" },
              { name: "Bukke",                     roll: "238U1A0403", branch: "B.Tech ECE" },
              { name: "Bellamkondu",               roll: "238U1A0402", branch: "B.Tech ECE" },
              { name: "Dara",                      roll: "238U1A0408", branch: "B.Tech ECE" },
              { name: "Bhargavi",                  roll: "248U5A0411", branch: "B.Tech ECE" },
              { name: "Gaddam",                    roll: "238U1A0411", branch: "B.Tech ECE" },
              { name: "Sree Koneti",               roll: "238U1A0419", branch: "B.Tech ECE" },
              { name: "Pending Name (248U5A0206)", roll: "248U5A0206", branch: "B.Tech" },
              { name: "Pending Name (248U5A0208)", roll: "248U5A0208", branch: "B.Tech" },
              { name: "Pending Name (248U5A0207)", roll: "248U5A0207", branch: "B.Tech" },
              { name: "Pending Name (248U5A0209)", roll: "248U5A0209", branch: "B.Tech" },
              { name: "Pending Name (238U1A0440)", roll: "238U1A0440", branch: "B.Tech" }
            ];
            
            for (const s of roster) {
                let dept = "CSE";
                if (s.branch.toLowerCase().includes("ece")) dept = "ECE";
                let section = "A";
                const numMatch = s.roll.match(/\d+$/);
                if (numMatch && parseInt(numMatch[0]) > 60) section = "B";
                
                await prisma.results.upsert({
                    where: { roll: s.roll },
                    update: {},
                    create: {
                        roll: s.roll,
                        name: s.name,
                        branch: s.branch,
                        department: dept,
                        section: section,
                        semester: "Semester 1",
                        academic_year: "2025-2026",
                        status: "Not Started",
                        exam_permission: "Allowed"
                    }
                });
            }
            console.log("[SEED] Seeding defaults finished successfully.");
        }
    } catch (err) {
        console.error("[SEED] Error seeding defaults:", err);
    }
}

// Initialize database seeding on startup
const initDbPromise = seedDefaultStudents();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER || 'javacsedscs@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

// SSE Clients array
let sseClients = [];

// SSE endpoint for real-time dashboard updates
app.get('/api/results/live', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();
    
    sseClients.push(res);
    console.log(`[SSE] Client connected. Total active clients: ${sseClients.length}`);
    
    req.on('close', () => {
        sseClients = sseClients.filter(c => c !== res);
        console.log(`[SSE] Client disconnected. Total active clients: ${sseClients.length}`);
    });
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
        timestamp, questionDetails, timeTaken, lastActiveStr, lastSyncStr,
        correctCount, wrongCount, resultClassification, tabWarnings,
        examStartTime, examEndTime, submissionType, department, section
    } = req.body;

    const semester = req.body.semester;
    const academic_year = req.body.academicYear || req.body.academic_year;
    const mobile_number = req.body.mobileNumber || req.body.mobile_number;
    const email = req.body.email;
    const exam_permission = req.body.examPermission || req.body.exam_permission;

    const login_time = req.body.loginTime || req.body.login_time;
    const login_device = req.body.loginDevice || req.body.login_device;
    const login_browser = req.body.loginBrowser || req.body.login_browser;
    const login_ip = req.body.loginIp || req.body.login_ip;
    const current_question = req.body.currentQuestion !== undefined ? req.body.currentQuestion : (req.body.current_question !== undefined ? req.body.current_question : null);
    const current_activity = req.body.currentActivity || req.body.current_activity;
    const online_status = req.body.onlineStatus || req.body.online_status;

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
            if (correctCount !== undefined && correctCount !== null) updateData.correct_count = correctCount;
            if (wrongCount !== undefined && wrongCount !== null) updateData.wrong_count = wrongCount;
            if (resultClassification !== undefined && resultClassification !== null && resultClassification !== '') updateData.result_classification = resultClassification;
            if (tabWarnings !== undefined && tabWarnings !== null) updateData.tab_warnings = tabWarnings;
            if (examStartTime !== undefined && examStartTime !== null && examStartTime !== '') updateData.exam_start_time = examStartTime;
            if (examEndTime !== undefined && examEndTime !== null && examEndTime !== '') updateData.exam_end_time = examEndTime;
            if (submissionType !== undefined && submissionType !== null && submissionType !== '') updateData.submission_type = submissionType;
            if (department !== undefined && department !== null) updateData.department = department;
            if (section !== undefined && section !== null) updateData.section = section;
            if (semester !== undefined && semester !== null) updateData.semester = semester;
            if (academic_year !== undefined && academic_year !== null) updateData.academic_year = academic_year;
            if (mobile_number !== undefined && mobile_number !== null) updateData.mobile_number = mobile_number;
            if (email !== undefined && email !== null) updateData.email = email;
            if (exam_permission !== undefined && exam_permission !== null) updateData.exam_permission = exam_permission;
            
            if (login_time !== undefined && login_time !== null) updateData.login_time = login_time;
            if (login_device !== undefined && login_device !== null) updateData.login_device = login_device;
            if (login_browser !== undefined && login_browser !== null) updateData.login_browser = login_browser;
            if (login_ip !== undefined && login_ip !== null) updateData.login_ip = login_ip;
            if (current_question !== undefined && current_question !== null) updateData.current_question = current_question;
            if (current_activity !== undefined && current_activity !== null) updateData.current_activity = current_activity;
            if (online_status !== undefined && online_status !== null) updateData.online_status = online_status;

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
                status: status !== undefined ? status : "Not Started",
                timestamp: timestamp !== undefined ? timestamp : null,
                question_details: questionDetails !== undefined ? questionDetails : null,
                time_taken: timeTaken !== undefined ? timeTaken : 0,
                last_active_str: lastActiveStr !== undefined ? lastActiveStr : null,
                last_sync_str: lastSyncStr !== undefined ? lastSyncStr : null,
                student_id: (req.body.studentId || req.body.student_id) || roll,
                exam_id: (req.body.examId || req.body.exam_id) || 'PYTHON_LAB_2026',
                percentage: req.body.percentage !== undefined ? req.body.percentage : (marks !== undefined ? (marks / 50.0) * 100 : 0),
                correct_count: correctCount !== undefined ? correctCount : 0,
                wrong_count: wrongCount !== undefined ? wrongCount : 0,
                result_classification: resultClassification !== undefined ? resultClassification : null,
                tab_warnings: tabWarnings !== undefined ? tabWarnings : 0,
                exam_start_time: examStartTime !== undefined ? examStartTime : null,
                exam_end_time: examEndTime !== undefined ? examEndTime : null,
                submission_type: submissionType !== undefined ? submissionType : null,
                department: department !== undefined ? department : null,
                section: section !== undefined ? section : null,
                semester: semester !== undefined ? semester : null,
                academic_year: academic_year !== undefined ? academic_year : null,
                mobile_number: mobile_number !== undefined ? mobile_number : null,
                email: email !== undefined ? email : null,
                exam_permission: exam_permission !== undefined ? exam_permission : "Allowed",
                login_time: login_time !== undefined ? login_time : null,
                login_device: login_device !== undefined ? login_device : null,
                login_browser: login_browser !== undefined ? login_browser : null,
                login_ip: login_ip !== undefined ? login_ip : null,
                current_question: current_question !== undefined ? current_question : 0,
                current_activity: current_activity !== undefined ? current_activity : null,
                online_status: online_status !== undefined ? online_status : "Offline"
            };

            console.log(`[API] Create payload:`, JSON.stringify(createData, null, 2));

            dbResponse = await prisma.results.create({
                data: createData
            });
            console.log(`[API] Prisma create execution completed successfully`);
        }
        
        console.log(`[API] Database response:`, JSON.stringify(dbResponse, null, 2));
        
        // Broadcast the real-time update to all connected SSE admin clients
        sseClients.forEach(client => {
            try {
                if (client && typeof client.write === 'function') {
                    client.write(`data: ${JSON.stringify({ type: 'UPDATE' })}\n\n`);
                }
            } catch (err) {
                console.error("[SSE] Broadcast failed for a client:", err);
            }
        });

        res.json({ success: true, message: 'Result synced successfully' });
    } catch (error) {
        console.error('[API] Error saving result. Stack trace:', error.stack || error);
        res.status(500).json({ error: 'Database write failed', details: error.message });
    }
});

// Activity Logging Endpoint
app.post('/api/activities', async (req, res) => {
    await initDbPromise;
    const { roll, eventType, details, device, browser, ip, questionNo } = req.body;
    console.log(`[API] Received activity POST request for roll: ${roll}, eventType: ${eventType}`);

    if (!roll || !eventType) {
        return res.status(400).json({ error: 'Roll number and eventType are required' });
    }

    try {
        // Save to activity_logs
        const log = await prisma.activity_logs.create({
            data: {
                roll,
                event_type: eventType,
                details: details ? String(details) : null,
                timestamp: new Date()
            }
        });

        // Prepare fields to update student status live in results
        const updateData = {
            current_activity: eventType + (details ? `: ${details}` : ''),
            last_active_str: new Date().toISOString()
        };

        if (eventType === 'LOGIN') {
            updateData.online_status = 'Online';
            updateData.login_time = new Date().toISOString();
            if (device) updateData.login_device = device;
            if (browser) updateData.login_browser = browser;
            if (ip) updateData.login_ip = ip;
        } else if (eventType === 'START_EXAM') {
            updateData.status = 'ACTIVE';
            updateData.exam_start_time = new Date().toISOString();
            updateData.online_status = 'Online';
        } else if (eventType === 'OPEN_QUESTION') {
            if (questionNo !== undefined) updateData.current_question = parseInt(questionNo);
            updateData.online_status = 'Online';
        } else if (eventType === 'RUN_CODE') {
            updateData.online_status = 'Online';
        } else if (eventType === 'SUBMIT_ANSWER') {
            updateData.online_status = 'Online';
        } else if (eventType === 'TAB_WARNING') {
            updateData.online_status = 'Online';
        } else if (eventType === 'LOGOUT') {
            updateData.online_status = 'Offline';
        } else if (eventType === 'EXAM_SUBMITTED') {
            updateData.status = 'SUBMITTED';
            updateData.online_status = 'Offline';
            updateData.exam_end_time = new Date().toISOString();
        }

        // Update results row
        await prisma.results.upsert({
            where: { roll },
            update: updateData,
            create: {
                roll,
                status: updateData.status || 'Not Started',
                online_status: updateData.online_status || 'Online',
                current_activity: updateData.current_activity,
                login_time: updateData.login_time || null,
                login_device: updateData.login_device || null,
                login_browser: updateData.login_browser || null,
                login_ip: updateData.login_ip || null,
                current_question: updateData.current_question || 0,
                exam_start_time: updateData.exam_start_time || null,
                exam_end_time: updateData.exam_end_time || null
            }
        });

        // Broadcast live update to SSE dashboard clients (including the activity log details)
        const broadcastPayload = {
            type: 'ACTIVITY',
            roll,
            eventType,
            details: details || '',
            timestamp: new Date().toISOString()
        };

        sseClients.forEach(client => {
            try {
                if (client && typeof client.write === 'function') {
                    client.write(`data: ${JSON.stringify(broadcastPayload)}\n\n`);
                }
            } catch (err) {
                console.error("[SSE] Activity broadcast failed for a client:", err);
            }
        });

        res.json({ success: true, message: 'Activity logged successfully', data: log });
    } catch (error) {
        console.error('[API] Error saving activity log:', error.stack || error);
        res.status(500).json({ error: 'Database write failed', details: error.message });
    }
});

// Fetch all activity logs (recent 200 logs for the timeline ticker)
app.get('/api/activities', async (req, res) => {
    await initDbPromise;
    const { roll } = req.query;
    try {
        const queryOptions = {
            take: 200,
            orderBy: {
                timestamp: 'desc'
            }
        };
        if (roll) {
            queryOptions.where = { roll };
        }
        const logs = await prisma.activity_logs.findMany(queryOptions);
        res.json(logs);
    } catch (error) {
        console.error('[API] Error fetching activity logs:', error.stack || error);
        res.status(500).json({ error: 'Database read failed' });
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
                percentage: row.percentage,
                correctCount: row.correct_count,
                wrongCount: row.wrong_count,
                resultClassification: row.result_classification,
                tabWarnings: row.tab_warnings,
                examStartTime: row.exam_start_time,
                examEndTime: row.exam_end_time,
                submissionType: row.submission_type,
                department: row.department,
                section: row.section,
                semester: row.semester,
                academicYear: row.academic_year,
                mobileNumber: row.mobile_number,
                email: row.email,
                examPermission: row.exam_permission,
                loginTime: row.login_time,
                loginDevice: row.login_device,
                loginBrowser: row.login_browser,
                loginIp: row.login_ip,
                currentQuestion: row.current_question,
                currentActivity: row.current_activity,
                onlineStatus: row.online_status
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
                percentage: row.percentage,
                correctCount: row.correct_count,
                wrongCount: row.wrong_count,
                resultClassification: row.result_classification,
                tabWarnings: row.tab_warnings,
                examStartTime: row.exam_start_time,
                examEndTime: row.exam_end_time,
                submissionType: row.submission_type,
                department: row.department,
                section: row.section,
                semester: row.semester,
                academicYear: row.academic_year,
                mobileNumber: row.mobile_number,
                email: row.email,
                examPermission: row.exam_permission,
                loginTime: row.login_time,
                loginDevice: row.login_device,
                loginBrowser: row.login_browser,
                loginIp: row.login_ip,
                currentQuestion: row.current_question,
                currentActivity: row.current_activity,
                onlineStatus: row.online_status
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

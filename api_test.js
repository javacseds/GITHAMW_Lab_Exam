const request = require('supertest');
const express = require('express');
const app = require('./api/index'); // Load the workspace API Index

async function runTests() {
    console.log("Starting backend API and Neon PostgreSQL integration tests...");
    
    // Test 1: Fetch all results
    console.log("\n[Test 1] GET /api/results");
    let res = await request(app).get('/api/results');
    console.log("Status:", res.status);
    console.log("Fetched results count:", Object.keys(res.body).length);
    if (res.status !== 200) throw new Error("Test 1 failed");

    // Test 2: Create a dummy student result record
    console.log("\n[Test 2] POST /api/results (Initial Insert)");
    const dummyRecord = {
        roll: "TESTROLL99",
        name: "Neon Test Student",
        branch: "B.Tech Database Testing",
        marks: 40,
        attempts: 4,
        status: "ACTIVE",
        timestamp: new Date().toISOString(),
        questionDetails: [
            { no: 1, title: "Test Question", attempted: true, passed: true, marks: 10 }
        ],
        timeTaken: 45,
        studentId: "TESTROLL99",
        examId: "TESTEXAM_1",
        percentage: 80.0
    };
    res = await request(app)
        .post('/api/results')
        .send(dummyRecord);
    console.log("Status:", res.status);
    console.log("Body:", res.body);
    if (res.status !== 200 || !res.body.success) throw new Error("Test 2 failed");

    // Test 3: Get the student record to verify all mapped fields
    console.log("\n[Test 3] GET /api/results/TESTROLL99");
    res = await request(app).get('/api/results/TESTROLL99');
    console.log("Status:", res.status);
    console.log("Data:", JSON.stringify(res.body, null, 2));
    if (res.status !== 200 || !res.body.exists) throw new Error("Test 3 failed");
    const retrieved = res.body.data;
    if (retrieved.name !== dummyRecord.name || 
        retrieved.marks !== dummyRecord.marks || 
        retrieved.timeTaken !== dummyRecord.timeTaken ||
        retrieved.studentId !== dummyRecord.studentId ||
        retrieved.examId !== dummyRecord.examId ||
        retrieved.percentage !== dummyRecord.percentage) {
        throw new Error("Fields mapping mismatch in Test 3!");
    }

    // Test 4: Heartbeat update (sending only status and timestamps, no name/branch)
    console.log("\n[Test 4] POST /api/results (Heartbeat Update)");
    const heartbeatPayload = {
        roll: "TESTROLL99",
        status: "IDLE",
        lastActiveStr: new Date().toISOString(),
        lastSyncStr: new Date().toISOString()
    };
    res = await request(app)
        .post('/api/results')
        .send(heartbeatPayload);
    console.log("Status:", res.status);
    console.log("Body:", res.body);
    if (res.status !== 200) throw new Error("Test 4 failed");

    // Test 5: Verify COALESCE leaves name, branch, questionDetails, timeTaken, marks, studentId, examId, and percentage intact
    console.log("\n[Test 5] GET /api/results/TESTROLL99 (Verify COALESCE)");
    res = await request(app).get('/api/results/TESTROLL99');
    console.log("Status:", res.status);
    const afterHeartbeat = res.body.data;
    console.log("Status after heartbeat:", afterHeartbeat.status);
    console.log("Name remains:", afterHeartbeat.name);
    console.log("Branch remains:", afterHeartbeat.branch);
    console.log("Marks remains:", afterHeartbeat.marks);
    console.log("Time Taken remains:", afterHeartbeat.timeTaken);
    console.log("Student ID remains:", afterHeartbeat.studentId);
    console.log("Exam ID remains:", afterHeartbeat.examId);
    console.log("Percentage remains:", afterHeartbeat.percentage);
    if (afterHeartbeat.status !== "IDLE" || 
        afterHeartbeat.name !== dummyRecord.name || 
        afterHeartbeat.branch !== dummyRecord.branch ||
        afterHeartbeat.marks !== dummyRecord.marks ||
        afterHeartbeat.timeTaken !== dummyRecord.timeTaken ||
        afterHeartbeat.studentId !== dummyRecord.studentId ||
        afterHeartbeat.examId !== dummyRecord.examId ||
        afterHeartbeat.percentage !== dummyRecord.percentage) {
        throw new Error("COALESCE updates wiped out fields in Test 5!");
    }

    // Test 6: Retest flow (DELETE student score)
    console.log("\n[Test 6] DELETE /api/results/TESTROLL99 (Retest Score Reset)");
    res = await request(app).delete('/api/results/TESTROLL99');
    console.log("Status:", res.status);
    console.log("Body:", res.body);
    if (res.status !== 200 || !res.body.success) throw new Error("Test 6 failed");

    // Test 7: Verify record is deleted
    console.log("\n[Test 7] GET /api/results/TESTROLL99 (Verify Deletion)");
    res = await request(app).get('/api/results/TESTROLL99');
    console.log("Status:", res.status);
    console.log("Exists:", res.body.exists);
    if (res.status !== 200 || res.body.exists) throw new Error("Test 7 failed: Record still exists after deletion!");

    console.log("\nALL BACKEND DATABASE INTEGRATION TESTS PASSED SUCCESSFULLY! ✅");
    process.exit(0);
}

runTests().catch(err => {
    console.error("Test execution failed:", err);
    process.exit(1);
});

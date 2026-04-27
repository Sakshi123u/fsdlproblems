const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Student = require('./models/Student');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // replaces body-parser
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ➕ Add Student
app.post('/students', async (req, res) => {
    try {
        const { name, rollNo, branch } = req.body;

        const student = new Student({ name, rollNo, branch });
        await student.save();

        res.json({ message: "Student Added Successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 📄 Get All Students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ❌ Delete Student
app.delete('/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student Deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✏️ Update Student
app.put('/students/:id', async (req, res) => {
    try {
        const { name, rollNo, branch } = req.body;

        await Student.findByIdAndUpdate(req.params.id, {
            name,
            rollNo,
            branch
        });

        res.json({ message: "Student Updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/EventRegistration")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

// ADD
app.post("/students", async (req, res) => {
    try {
        const { name, email, event } = req.body;

        const newStudent = new Student({ name, email, event });
        await newStudent.save();

        res.json({ message: "Student added successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE
app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
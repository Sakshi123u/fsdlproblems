const express  = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Student = require('./models/Student');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/EventRegistrationDB')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.post('/students',async(req,res)=>{
    const student = new Student(req.body);
    await student.save();
    res.json({ message: "Student added successfully" });
})

app.get("/students",async(req,res)=>{
    const data = await Student.find();
    res.json( data);
})

app.delete("/students/:id",async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
})
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/s1db")
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

app.post("/students",async(req,res)=>{
    const student = new Student(req.body);
    await student.save();
    res.json("Student added!");
})

app.get("/students",async(req,res)=>{
    const data = await Student.find();
    res.json(data);
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})
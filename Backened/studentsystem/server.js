const express = require("express");
const mongoose = require("mongoose");
const Student = require("./model/student");
const student = require("./model/student");

const app = express();
app.use(express.json());

mongoose.coneect("mongodb://localhost:127.0.0:27017/studentDB");

app.post("/add",async(req,res)=>{
    const student = new student(req.body);
    await student.save();
    res.send("Student added successfully");
});

app.get("",async(req,res)=>{
    const students = await Student.find();
    res.send(students);
})
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
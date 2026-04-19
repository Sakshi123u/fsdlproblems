const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    rollno: Number,
    branch: string
});

module.exports = mongoose.model("Student",studentSchema);
const express = require("express");
const mongoose = require("mongoose");
const Participant = require("./model/Participant");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/eventDB");

// ➤ Register participant (CREATE)
app.post("/register", async (req, res) => {
  const participant = new Participant(req.body);
  await participant.save();
  res.send("Registration successful");
});

// ➤ Get all participants (READ)
app.get("/participants", async (req, res) => {
  const data = await Participant.find();
  res.json(data);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
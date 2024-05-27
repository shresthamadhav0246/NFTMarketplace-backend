// backend/models/User.js

const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  walletAddress: { type: String, required: true, unique: true },
  profilePicture: String,
  bio: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);

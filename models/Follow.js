const mongoose = require("mongoose");

// Follow Schema
const followSchema = new mongoose.Schema({
  followerAddress: { type: String, required: true }, // Use wallet address
  tokenId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Follow", followSchema);

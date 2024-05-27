const mongoose = require("mongoose");

// Like Schema
const likeSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true }, // Use wallet address
  tokenId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Like", likeSchema);

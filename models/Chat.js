const mongoose = require("mongoose");

// Chat Schema
const chatSchema = new mongoose.Schema({
  tokenId: { type: String, required: true },
  messages: [
    {
      walletAddress: { type: String, required: true, unique: true },
      message: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);

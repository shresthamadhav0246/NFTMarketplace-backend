const mongoose = require("mongoose");

// NFT Schema
const nftSchema = new mongoose.Schema({
  tokenId: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  metadata: {
    title: String,
    description: String,
    image: String,
    attributes: [{ type: Object }],
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("NFT", nftSchema);

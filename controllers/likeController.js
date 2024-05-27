// backend/controllers/likeController.js

const Like = require("../models/Like");

exports.likeNFT = async (req, res) => {
  const { walletAddress, tokenId } = req.body;
  try {
    const newLike = new Like({ walletAddress, tokenId });
    await newLike.save();
    res.status(201).json(newLike);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to get total likes for a specific NFT
exports.getTotalLikes = async (req, res) => {
  const { tokenId } = req.params;
  try {
    const totalLikes = await Like.countDocuments({ tokenId });
    res.status(200).json({ totalLikes });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

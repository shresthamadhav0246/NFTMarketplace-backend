// backend/controllers/likeController.js

const Follow = require("../models/Follow");

exports.followNFT = async (req, res) => {
  const { followerAddress, tokenId } = req.body;
  try {
    const newFollow = new Follow({ followerAddress, tokenId });
    await newFollow.save();
    res.status(201).json(newFollow);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.unfollowNFT = async (req, res) => {
  const { followerAddress, tokenId } = req.body;
  try {
    const result = await Follow.findOneAndDelete({ followerAddress, tokenId });
    if (result) {
      res.status(200).json({ message: "Unfollowed successfully" });
    } else {
      res.status(404).json({ message: "Follow not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to get followed NFTs for a specific user
exports.getFollow = async (req, res) => {
  const { followerAddress } = req.params;
  try {
    const followedNFTs = await Follow.find({ followerAddress }).populate(
      "tokenId"
    );
    res.status(200).json(followedNFTs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

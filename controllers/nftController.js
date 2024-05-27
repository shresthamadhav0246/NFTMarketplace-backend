// backend/controllers/nftController.js

const NFT = require("../models/NFT");

exports.createNFT = async (req, res) => {
  const { tokenId, owner, metadata } = req.body;
  try {
    const newNFT = new NFT({ tokenId, owner, metadata });
    await newNFT.save();
    res.status(201).json(newNFT);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getNFT = async (req, res) => {
  const { id } = req.params;
  try {
    const nft = await NFT.findById(id).populate("owner");
    if (nft) {
      res.json(nft);
    } else {
      res.status(404).json({ message: "NFT not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

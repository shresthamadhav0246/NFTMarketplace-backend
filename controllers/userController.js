// backend/controllers/userController.js

const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { username, email, walletAddress, profilePicture, bio } = req.body;
  try {
    const newUser = new User({
      username,
      email,
      walletAddress,
      profilePicture,
      bio,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  const { walletAddress } = req.params;
  try {
    const user = await User.findOne({ walletAddress });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

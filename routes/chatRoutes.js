// backend/routes/likeRoutes.js

const express = require("express");
const router = express.Router();
const { chat, getChat } = require("../controllers/chatController");

router.post("/chat/:tokenId", chat);
// Route to get followed NFTs for a specific user
router.get("/chat/:tokenId", getChat);

module.exports = router;

// backend/routes/likeRoutes.js

const express = require("express");
const router = express.Router();
const { likeNFT, getTotalLikes } = require("../controllers/likeController");

router.post("/like", likeNFT);
// Route to get total likes for a specific NFT
router.get("/:tokenId/total", getTotalLikes);

module.exports = router;

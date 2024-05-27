// backend/routes/likeRoutes.js

const express = require("express");
const router = express.Router();
const {
  followNFT,
  getFollow,
  unfollowNFT,
} = require("../controllers/followController");

router.post("/follow", followNFT);
// Route to get followed NFTs for a specific user
router.get("/follow/:followerAddress", getFollow);

router.post("/unfollow", unfollowNFT);

module.exports = router;

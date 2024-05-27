// backend/routes/nftRoutes.js

const express = require("express");
const router = express.Router();
const { createNFT, getNFT } = require("../controllers/nftController");

router.post("/", createNFT);
router.get("/:id", getNFT);

module.exports = router;

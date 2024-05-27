// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/nfts", require("./routes/nftRoutes"));
app.use("/api/likes", require("./routes/likeRoutes"));
app.use("/api/follows", require("./routes/followRoutes"));
app.use("/api/chats", require("./routes/chatRoutes"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

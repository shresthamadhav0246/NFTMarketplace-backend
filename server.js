const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: ["http://localhost:3000", "http://localhost:3030"], // whatever ports you used in frontend
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable Mongoose debugging
mongoose.set("debug", true);

app.get("/:name", (req, res) => {
  let name = req.params.name;
  res.json({ message: `Hello ${name}` });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/nfts", require("./routes/nftRoutes"));
app.use("/api/likes", require("./routes/likeRoutes"));
app.use("/api/follows", require("./routes/followRoutes"));
app.use("/api/chats", require("./routes/chatRoutes"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Catch-all route to serve the testing page
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for Vercel

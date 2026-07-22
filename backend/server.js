require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const caregiverRoutes = require("./routes/caregiverRoutes");
const authRoutes = require("./routes/authRoutes");
const periodRoutes = require("./routes/periodRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
const dietRoutes = require("./routes/dietRoutes");
const articleRoutes = require("./routes/articleRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
// const locationRoutes = require("./routes/locationRoutes");
const locationRoutes = require("./routes/locationRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/caregiver", caregiverRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/period", periodRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/diet", dietRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/review", reviewRoutes);
// app.use("/api/location", locationRoutes);
app.use("/api/location", locationRoutes);
app.use(
  "/api/notification",
  notificationRoutes
);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));


// Test Route
app.get("/", (req, res) => {
  res.send("🌙 LUVIA Backend is Running...");
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
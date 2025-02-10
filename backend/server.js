import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // ✅ Import connectDBectDB



dotenv.config();
connectDB();

const app = express();
app.use(express.json());1
app.use(cors());

app.get("/", (req, res) => {
  res.send("YouTube Clone API is running!");
});

// Import Routes
import userRoutes from "./routes/userRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);

const PORT = process.env.PORT || 5000;//5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

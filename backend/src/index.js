import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import webtoonRoute from "./routes/webtoonRoutes.js";


dotenv.config();


mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING) 
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.error("Database connection error:", err));


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use("/api/webtoons", webtoonRoute); 
app.get("/api/health", async (req, res) => {
  res.send({ message: "health OK!" });
});

app.listen(7000, () => {
  console.log("Server started on localhost:7000");
});

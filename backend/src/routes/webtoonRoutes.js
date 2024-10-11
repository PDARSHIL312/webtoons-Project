import express from "express";
import multer from "multer";
import Webtoon from "../models/webtoonsModel.js";
import { v2 as cloudinary } from "cloudinary";

const upload = multer({ dest: "uploads/" });
const router = express.Router();

const uploadWebtoon = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const newWebtoon = new Webtoon({
      title: req.body.title,
      description: req.body.description,
      image: result.secure_url,
    });

    const savedWebtoon = await newWebtoon.save();

    res.status(201).json({
      message: "Webtoon uploaded successfully",
      webtoon: savedWebtoon,
    });
  } catch (error) {
    console.error("Error uploading webtoon:", error);
    res.status(500).json({
      message: "Error uploading webtoon",
      error: error.message,
    });
  }
};

const getWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find();
    res.status(200).json(webtoons);
  } catch (error) {
    console.error("Error fetching webtoons:", error);
    res.status(500).json({
      message: "Error fetching webtoons",
      error: error.message,
    });
  }
};

router.post("/upload", upload.single("image"), uploadWebtoon);
router.get("/", getWebtoons);

export default router;

const Webtoon = require("../models/webtoonModel");
import Webtoon from "../models/webtoonsModel";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadWebtoon = async (req, res) => {
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
    res.status(500).json({
      message: "Error uploading webtoon",
      error,
    });
  }
};

exports.getWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find();
    res.status(200).json(webtoons);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching webtoons",
      error,
    });
  }
};

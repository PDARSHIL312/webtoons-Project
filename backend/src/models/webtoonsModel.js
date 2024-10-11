import mongoose from "mongoose";

const webtoonSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150,
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 1000,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Webtoon", webtoonSchema);

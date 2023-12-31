import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true},
    description: {type: String, required: true},
    imageUrl: String,
    likes: { type: Array, defaultValue: []},//push pull method
  },
  { timestamps: true }
);

export default mongoose.model("Tweet", TweetSchema);

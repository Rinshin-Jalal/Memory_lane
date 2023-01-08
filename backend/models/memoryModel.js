import mongoose from "mongoose";

const MemoryScema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Text is required"],
    },
    image: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    note: {
      type: String,
    },
    location: {
      type: String,
    },
    emotion: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User is required"],
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Memory", MemoryScema);

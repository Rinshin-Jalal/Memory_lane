import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    bio: {
      type: String,
    },
    profile_pic: {
      type: String,
      required: [true, "Profile pic is required"],
    },
    location: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

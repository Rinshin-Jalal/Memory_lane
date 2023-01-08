import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
  updateProfile,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", protect, getMe);
userRouter.put("/update", protect, updateProfile);

export default userRouter;

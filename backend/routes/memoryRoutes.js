import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import memoryController from "../controllers/memoryController.js";
import upload from "../middleware/multer-cloudinary.js";

const memoryRouter = Router();

memoryRouter
  .route("/")
  .get(protect, memoryController.getMemories)
  .post(protect, upload.single("image"), memoryController.createMemories);
memoryRouter
  .route("/:id")
  .put(protect, memoryController.updateMemory)
  .delete(protect, memoryController.deleteMemory);

export default memoryRouter;

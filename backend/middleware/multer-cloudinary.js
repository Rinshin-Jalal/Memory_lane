import cloudinaryConf from "../config/cludinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryConf,
  params: {
    folder: "videos",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  },
});

const upload = multer({ storage: storage });

export default upload;

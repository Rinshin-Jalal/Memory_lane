import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import cors from "cors";
import ConnectDB from "./config/db.js";

const port = process.env.PORT || 3000;

ConnectDB();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server is running on port ${port}`));

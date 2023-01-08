import asyncHandler from "express-async-handler";
import memoryModel from "../models/memoryModel.js";
import userModel from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

const getMemories = asyncHandler(async (req, res) => {
  const memories = await memoryModel
    .find({ user: req.user.id })
    .sort({ date: 1, title: -1 });
  // arange based on date in descending order use memoryModel.date

  res.status(200).json(memories);
});

const createMemories = asyncHandler(async (req, res) => {
  // create memory it must have title and date and user,may have image,may have note,location,emotion

  if (!req.body.title || !req.body.date) {
    res.status(400);
    throw new Error("No title or date provided");
  }

  const memory = await memoryModel.create({
    title: req.body.title,
    date: req.body.date,
    user: req.user.id,
    image: req.file.path,
    note: req.body.note,
    location: req.body.location,
    emotion: req.body.emotion,
  });
  res.status(200).json(memory);
});

const updateMemory = asyncHandler(async (req, res) => {
  const memory = await memoryModel.findById(req.params.id);

  if (!memory) {
    res.status(400);
    throw new Error("Goal not found");
  }
  if (memory.user.toString() !== req.user.id.toString()) {
    res.status(401);
    throw new Error("You are not authorized to edit this memory");
  }

  // get the title and date,note,date,location,emotion
  const { title, date, note, location, emotion } = req.body;

  //update it if it exists
  if (title) {
    memory.title = title;
  }
  if (date) {
    memory.date = date;
  }

  if (note) {
    memory.note = note;
  }
  if (location) {
    memory.location = location;
  }
  if (emotion) {
    memory.emotion = emotion;
  }
  const updatedMemory = await memory.save();

  res.status(200).json(updatedMemory);
});

// delete goal
const deleteMemory = asyncHandler(async (req, res) => {
  const memory = await memoryModel.findById(req.params.id);

  if (!memory) {
    res.status(400);
    throw new Error("Memory not found");
  }
  if (memory.user.toString() !== req.user.id.toString()) {
    res.status(401);
    throw new Error("You are not authorized to delete this memory");
  }

  await memory.remove();
  res.status(200).json({ message: "Memory deleted" });
});

// export all functions
export default {
  getMemories,
  createMemories,
  updateMemory,
  deleteMemory,
};

const Quiz = require("../models/Quiz");
import { Response, Request } from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";

// @ route GET /api/quiz
// @ desc  Fetch all quiz
// @ access Public
export const getQuiz = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.find();

    res.status(200).json(quiz);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route GET /api/quiz/:id
// @ desc  Fetch single quiz
// @ access Public
export const getQuizById = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ msg: "Quiz not found" });
    }

    res.status(200).json(quiz);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route POST /api/quiz
// @ desc  Create new quiz
// @ access Private
export const createQuiz = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, questions, topicId, question, options, answer } = req.body;

    const topic = await topicId.findById(topicId);

    if (!topic) {
      return res.status(404).json({ error: "Topic not found" });
    }

    const newQuiz = new Quiz({
      title,
      questions,
      topic: topicId,
      question,
      options,
      answer,
    });

    const quiz = await newQuiz.save();

    res.status(201).json(quiz);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route PUT /api/quiz
// @ desc  Update quiz
// @ access Private
export const updateQuiz = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, questions, topicId, question, options, answer } = req.body;

    const topic = await topicId.findById(topicId);

    if (!topic) {
      return res.status(404).json({ error: "Topic not found" });
    }

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { $set: { title, questions, topic: topicId, question, options, answer } },
      { new: true }
    );

    res.status(200).json(updatedQuiz);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route DELETE /api/quiz/:id
// @ desc  Delete a quiz
// @ access Private
export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ msg: "Quiz not found" });
    }

    res.status(200).json({msg: "Quiz is successfully deleted"})
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

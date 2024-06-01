const Quiz = require("../models/Quiz");
import { Response, Request } from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";
const Topic = require("../models/topic");

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
    const { title, questions, topicId } = req.body;

    const topic = await Topic.findById(topicId);

    if (!topic) {
      return res.status(404).json({ error: "Topic not found" });
    }

    // The questions array should have at least one object containing the question in its array
    if (!questions || questions.length === 0) {
      return res.status(400).json({ msg: "Questions can not be empty" });
    }
    const newQuiz = new Quiz({
      title,
      questions,
      topic: topicId,
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
    const { title, questions, topicId } = req.body;

    const topic = await Topic.findById(topicId);

    if (!topic) {
      return res.status(404).json({ error: "Topic not found" });
    }

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { $set: { title, questions, topic: topicId } },
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
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).json({ msg: "Quiz not found" });
    }

    res.status(200).json({ msg: "Quiz is successfully deleted" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route POST /api/quiz/:id/question
// @ desc  Add a question to a quiz
// @ access Private
export const addQuestion = async (req: Request, res: Response) => {
  const { question, options, answer } = req.body;

  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ msg: "Quiz not found" });
    }

    const newQuestion = { question, options, answer };

    quiz.questions.push(newQuestion);
    await quiz.save();

    res.status(201).json(quiz);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route PUT /api/quiz/:quizId/question/:questionId
// @ desc  Update a question in a quiz
// @ access Private
export const updateQuestion = async (req: Request, res: Response) => {
  const { question, options, answer } = req.body;

  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) {
      return res.status(404).json({ msg: "Quiz not found" });
    }

    const questionIndex = quiz.questions.findIndex(
      (q: any) => q.id === req.params.questionId
    );

    if (questionIndex === -1) {
      return res.status(404).json({ msg: "Question not found" });
    }

    quiz.questions[questionIndex] = {
      question,
      options,
      answer,
      _id: req.params.questionId,
    };
    await quiz.save();

    res.status(200).json(quiz);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route DELETE /api/quiz/:quizId/question/:questionId
// @ desc  Delete a question from a quiz
// @ access Private
export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) {
      return res.status(404).json({ msg: "Quiz not found" });
    }

    quiz.questions = quiz.questions.filter(
      (q: any) => q.id !== req.params.questionId
    );
    await quiz.save();

    res.status(200).json(quiz);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

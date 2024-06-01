import express from "express";
import { body } from "express-validator";
import {
  addQuestion,
  createQuiz,
  deleteQuestion,
  deleteQuiz,
  getQuiz,
  getQuizById,
  updateQuestion,
  updateQuiz,
} from "../controllers/quiz";

const router = express.Router();

// GET ALL QUIZ
router.get("/", getQuiz);

// GET QUIZ BY ID
router.get("/:id", getQuizById);

// CREATE NEW QUIZ
router.post("/", createQuiz);

// UPDATE QUIZ
router.put("/:id", updateQuiz);

// DELETE QUIZ
router.delete("/:id", deleteQuiz);

// ADD NEW QUESTION
router.post('/:id/question', addQuestion);

// UPDATE QUESTION
router.put('/:quizId/question/:questionId', updateQuestion);

// DELETE QUESTION
router.delete('/:quizId/question/:questionId', deleteQuestion);


module.exports = router;

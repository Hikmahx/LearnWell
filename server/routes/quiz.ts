import express from "express";
import { body } from "express-validator";
import {
  createQuiz,
  deleteQuiz,
  getQuiz,
  getQuizById,
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

module.exports = router;

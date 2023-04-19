const express = require("express");
import { body } from "express-validator";
import {
  createSubject,
  deleteSubject,
  getSubjectById,
  getSubjects,
  updateSubject,
} from "../controllers/subjects";

const router = express.Router();

// GET all subjects
router.get("/", getSubjects);

// GET a subject by ID
router.get("/:id", getSubjectById);

// CREATE a new subject
router.post(
  "/",
  body("title", "Title is required").not().isEmpty(),
  body("topics", "Topics is required").isArray({ min: 1 }),
  createSubject
);

// UPDATE a subject
router.put(
  "/:id",
  body("title", "Title is required").not().isEmpty(),
  // body("topics", "Topics is required").isArray({ min: 1 }),
  updateSubject
);

// DELETE a subject
router.delete("/:id", deleteSubject);

module.exports = router;

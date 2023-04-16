const express = require("express");
import { getSubjectById, getSubjects } from "../controllers/subjects";

const router = express.Router();

// GET all subjects
router.get("/", getSubjects);

// GET a subject by ID
router.get("/:id", getSubjectById);

module.exports = router;

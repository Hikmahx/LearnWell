const express = require("express");
import {
  createTopic,
  deleteTopic,
  getTopic,
  getTopicsBySubject,
  updateTopic,
} from "../controllers/topics";
import { body } from "express-validator";

const router = express.Router();

// GET all topics by subject id
router.get('/subject/:id/topics', getTopicsBySubject);

// router.get("/", getTopicsBySubject);

// GET a topic
router.get("/:id", getTopic);

// Create a new topic
router.post(
  "/",
  body("title", "Title is required").not().isEmpty(),
  body("description", "Description is required").not().isEmpty(),
  body("video", "Video is required").not().isEmpty(),
  body("subjectId", "Its subject is required").not().isEmpty(),
  createTopic
);

// UPDATE a topic
router.put(
  "/:id",
  body("title", "Title is required").not().isEmpty(),
  body("description", "Description is required").not().isEmpty(),
  body("video", "Video is required").not().isEmpty(),
  updateTopic
);

// DELETE a topic
router.delete("/:id", deleteTopic);

module.exports = router;

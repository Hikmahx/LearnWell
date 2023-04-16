const express = require("express");
import { getTopic, getTopicsBySubject } from "../controllers/topics";

const router = express.Router();

// GET all topics by subject id
router.get("/", getTopicsBySubject);

// GET a topic
router.get("/:id", getTopic);

module.exports = router;

const Topic = require("../models/topic");
import { validationResult } from "express-validator";

import { Response, Request } from "express";

// @ route GET api/topics
// @ desc  Get all topics of a specific subject
// @ access Public
export const getTopicsBySubject = async (req: Request, res: Response) => {
  try {
    const topics = await Topic.find({ subjectId: req.params.subjectId }).select(
      "title"
    );

    res.status(200).json({ topics });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route GET api/topics
// @ desc  Get single topic
// @ access Public
export const getTopic = async (req: Request, res: Response) => {
  try {
    const topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({ msg: "Topic not found" });
    }

    res.status(200).json({ topic });
  } catch (err: any) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Topic not found" });
    }

    res.status(500).send("Server Error");
  }
};


// @ route POST /api/topics
// @ desc  Create new topic
// @ access Private
export const createTopic = async (req: Request, res: Response) => {
  // Validate req.body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let topic = new Topic(req.body);
    let newTopic = await topic.save();
    res.status(201).json(newTopic);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};


// @ route PUT /api/topics
// @ desc  Update topic
// @ access Private
export const updateTopic = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const topic = await Topic.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!topic) {
      return res.status(404).json({ msg: "Topic not found" });
    }
    res.status(200).json(topic);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route DELETE /api/topics/:id
// @ desc  Delete a topic
// @ access Private
export const deleteTopic = async (req: Request, res: Response) => {
  try {
    const topic = await Topic.findByIdAndDelete(req.params.id);
    if (!topic) {
      return res.status(404).json({ msg: "Topic not found" });
    }
    res.status(200).json({ msg: "Topic is successfully deleted" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

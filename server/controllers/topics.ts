const Topic = require("../models/topic");
const Subject = require("../models/subject");
import { validationResult } from "express-validator";

import { Response, Request } from "express";

// @ route GET api/topics
// @ desc  Get all topics of a specific subject
// @ access Public
export const getTopicsBySubject = async (req: Request, res: Response) => {
  try {
    const topics = await Topic.find({ subjects: req.params.subjectId }).select(
      "title"
    );

    if (!topics || topics.length === 0) {
      return res.status(404).json({ msg: "No topics found for this subject" });
    }

    res.status(200).json({ topics });
  } catch (err: any) {
    console.error(err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Subject not found" });
    }

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
  // SIDE NOTE: I THINK THE TOPIC SHOULD ONLY BE CREATED IF IT HAS A SUBJECT IT BELONGS TO

  // Validate req.body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // let topic = new Topic(req.body);
    // let newTopic = await topic.save();
    // res.status(201).json(newTopic);

    const { title, video, description, subjectId } = req.body;
    // Check if the subject exists
    const subject = await Subject.findById(subjectId);
    if (!subject) {
      return res.status(404).json({ error: "Subject not found" });
    }

    // Check if this title already exists with the given subject id
    const existingTopic = await Topic.findOne({
      title,
      subjects: subjectId,
    });
    // If the topic has already been created into this subject
    if (existingTopic) {
      return res
        .status(400)
        .json({ msg: "This topic already exists in this subject provided" });
    } else {
      // If it is simply a new topic, a new topic will be created
      // Create a new topic
      const topic = new Topic({
        title,
        video,
        description,
        subjects: subjectId, // Set the subject of the topic to the given subject id
      });
      const newTopic = await topic.save();

      // Add the topic (using the topic id) to the subject's topics array
      subject.topics.push(newTopic._id);
      await subject.save();

      // res.status(201).json(newTopic);

      // Populate the subject with the updated topics array
      const updatedSubject = await Subject.findById(subjectId).populate(
        "topics"
      );

      res.status(201).json({ newTopic, updatedSubject });
    }
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
    // Make sure the subject can't be changed by excluding subject from updatedFields
    // SIDE NOTE: TELL USERS THRU THE FRONTEND THEY CAN'T UPDATE THE SUBJECT
    const { title, subjects, ...updatedFields } = req.body;

    const topic = await Topic.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ msg: "Topic not found" });
    }

    // Check if the new topic title already exists in any of the subjects that the topic belongs to
    const existingTitleInSubjects = await Subject.exists({
      _id: { $in: subjects },
      "topics.title": { $regex: new RegExp(`^${title}$`, "i") },
    });
    if (existingTitleInSubjects) {
      return res
        .status(400)
        .json({ msg: "Topic title already exists in one of the subjects" });
    }

    // Update the topic
    const updatedTopic = await Topic.findByIdAndUpdate(
      req.params.id,
      { $set: { title, ...updatedFields } },
      { new: true }
    );

    res.status(200).json(updatedTopic);
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(400).json({ msg: "Topic title already exists" });
    }
    
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

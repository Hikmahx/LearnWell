const Subject = require("../models/subject");
import { Response, Request } from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";
const Topic = require("../models/topic");

// @ route GET /api/subjects
// @ desc  Fetch all subjects
// @ access Public
export const getSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await Subject.find().populate('topics');;
    res.status(200).json(subjects);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route GET /api/subjects/:id
// @ desc  Fetch single subject
// @ access Public
export const getSubjectById = async (req: Request, res: Response) => {
  try {
    const subject = await Subject.findById(req.params.id).populate("topics");
    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }
    res.status(200).json({ subject });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route POST /api/subjects
// @ desc  Create new subject
// @ access Private
export const createSubject = async (req: Request, res: Response) => {
  // Validate req.body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // let subject = new Subject(req.body);
    // let newSubject = await subject.save();
    // res.status(201).json(newSubject);

    const { title, topics } = req.body;

    // Create new topics
    // const newTopics: any[] = [];
    // topics.forEach(async (topic: any) => {

    const newTopics = await Promise.all(
      topics.map(async (topic: any) => {
        // Check if an id is given
        if (mongoose.Types.ObjectId.isValid(topic)) {
          // Check if the topic in already in DB
          const existingTopic = await Topic.findById(topic);
          if (existingTopic) {
            console.log("this id already exist in the database");
            // Use the existing topic's id
            return existingTopic._id;
          } else {
            return res.status(400).json({ error: "Invalid topic ID" });
          }
          // If it is not an id but an object given
        } else {
          // Check if the topic already exists
          const existingTopic = await Topic.findOne({
            title: topic.title,
            video: topic.video,
            description: topic.description,
          });
          // If the topic has been created into this subject
          if (existingTopic) {
            console.log("this has been added");
            // Use the existing topic's id
            return existingTopic._id;
          } else {
            // A new topic will be created
            const { title, video, description } = topic;
            const newTopic = new Topic({ title, video, description });
            const savedTopic = await newTopic.save();
            // newTopics.push(savedTopic._id);
            return savedTopic._id;
          }
        }
      })
    );

    // Create new subject
    const subject = await new Subject({
      title,
      topics: newTopics,
    });

    const newSubject = await subject.save();
    const populatedSubject = await Subject.findById(newSubject._id).populate("topics");
    res.status(201).json(populatedSubject);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route PUT /api/subjects
// @ desc  Update subject
// @ access Private
export const updateSubject = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const subject = await Subject.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }
    res.status(200).json(subject);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route DELETE /api/subjects/:id
// @ desc  Delete a subject
// @ access Private
export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }
    res.status(200).json({ msg: "Subject is successfully deleted" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

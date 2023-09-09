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
    const subjects = await Subject.find().populate("topics");
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

    // Check if any two topics have the same title
    const topicTitles = topics.map((topic: any) => topic.title);
    const uniqueTopicTitles = new Set(topicTitles);
    if (topicTitles.length !== uniqueTopicTitles.size) {
      return res.status(400).json({
        message:
          "Duplicate topic titles provided, topic title should be unique in a subject",
      });
    }

    // Use Promise.all to wait for all the topics to be created before returning the newTopics array
    const newTopics = await Promise.all(
      topics.map(async (topic: any) => {
        // Check if the topic already exists
        const existingTopic = await Topic.findOne({
          title: topic.title,
        });
        // If the topic has already been created, use the existing topic's id
        if (existingTopic) {
          return existingTopic._id;
        } else {
          // If it is a new topic, create a new topic
          const { title, video, description } = topic;
          const newTopic = new Topic({
            title,
            video,
            description,
            subjects: null, // set the subjectId to null initially
          });
          const savedTopic = await newTopic.save();
          return savedTopic._id;
        }
      })
    );

    const existingSubject = await Subject.findOne({
      title: req.body.title,
    });
    if (existingSubject) {
      // If the subject has already been created into this subject
      return res
        .status(400)
        .json({ message: "This subject title already exists" });
    }

    // This code block finds an existing subject by its title, or creates a new one if it does not already exist.
    // It updates the subject by adding all the new topics to its topics array, using the $addToSet operator to avoid adding duplicate topics.
    // The { new: true, upsert: true } option ensures that if the subject does not already exist, it is created as a new document in the collection.
    // The updated or newly created subject is returned as newSubject.
    // const newSubject = await Subject.findOneAndUpdate(
    //   { title },
    //   { $addToSet: { topics: { $each: newTopics } } },
    //   { new: true, upsert: true }
    // );

    // const newSubject = await Subject.findOneAndUpdate(
    //   { title, "topics.title": { $nin: newTopics.map((t: any) => t.title) } },
    //   { $addToSet: { topics: { $each: newTopics } } },
    //   { new: true, upsert: true }
    // );

    // Create new subject
    const subject = await new Subject({
      title,
      topics: newTopics,
    });

    const newSubject = await subject.save();

    // Assign the subject id to each of the topics in the newly created subject
    // Check if the new subject ID is already in the array of subjects for this topic.
    // If not, add it using the spread operator to avoid duplicates.
    for (let i = 0; i < newSubject.topics.length; i++) {
      const topic = await Topic.findById(newSubject.topics[i]);
      await Topic.findByIdAndUpdate(newSubject.topics[i], {
        subjects: [...new Set([...(topic.subjects || []), newSubject._id])],
      });
    }

    // Populate the subject with its topics and send the response
    const populatedSubject = await Subject.findById(newSubject._id).populate(
      "topics"
    );
    res.status(201).json(populatedSubject);
  } catch (err: any) {
    // Error for if the same title exists in a subject
    if (err.code === 11000 && err.keyPattern && err.keyPattern.title) {
      res
        .status(400)
        .json({ message: "This topic already exists in this subject" });
    } else {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
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
    // Find the subject by id
    const subject = await Subject.findById(req.params.id);

    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }

    // Check if the new title is already taken by another subject
    const { title } = req.body;
    const existingSubject = await Subject.findOne({ title });
    if (existingSubject && existingSubject._id.toString() !== subject._id.toString()) {
      return res.status(400).json({ msg: `Subject '${title}' already exists` });
    }

    // Update the subject
    const updatedSubject = await Subject.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedSubject);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route DELETE /api/subjects/:id
// @ desc  Delete a subject (and all its topics)
// @ access Private
export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }

    // Delete all topics with the subject ID of the deleted subject
    const topics = await Topic.find({ subjects: subject._id });

    for (const topic of topics) {
      if (topic.subjects.length > 1) {
        // If the topic is associated with other subjects, remove only the subject ID from its subjects array
        topic.subjects.pull(subject._id);
        await topic.save();
      } else {
        // If the topic is associated with only this subject, delete the topic
        await Topic.findByIdAndDelete(topic._id);
      }
    }

    res.status(200).json({ msg: "Subject is successfully deleted with its topics" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route GET /api/subjects?search=query
// @ desc  Search subjects and topics title
// @ access Public
export const searchSubjectsAndTopics = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;

    // Check if the kind of query isn't q
    if (!query) {
      // Check if a query is not provided
      if (Object.keys(req.query).join(", ") === "") {
        return res.status(400).json({
          msg: "Search query not provided. Use 'q' for search query",
        });
      } else {
        // If the query provided doesn't exist
        return res.status(400).json({
          msg: `Search query '${Object.keys(req.query).join(
            ", "
          )}' not available`,
        });
      }
    }

    // subjects search (returns subjects and array of topics (only their id and title) that belong to the subjects)
    const subjects = await Subject.find({
      title: { $regex: query, $options: "i" },
    })
      // .populate("topics");
      .populate({ path: "topics", select: "id title" });

    // topics search (returns topics and array of subjects (only their id and title) they can be found in)
    const topics = await Topic.find({
      title: { $regex: query, $options: "i" },
    })
      // .populate("subjects");
      .populate({ path: "subjects", select: "id title" });

    res.status(200).json({ subjects, topics });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

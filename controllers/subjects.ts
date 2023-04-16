const Subject = require("../models/subject");
import { Response, Request } from "express";
import { validationResult } from "express-validator";

// @ route GET /api/subjects
// @ desc  Fetch all subjects
// @ access Public
export const getSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await Subject.find();
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
    const subject = await Subject.findById(req.params.id);
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
    let subject = new Subject(req.body);
    let newSubject = await subject.save();
    res.status(201).json(newSubject);
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

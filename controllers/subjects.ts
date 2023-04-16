const Subject = require("../models/subject");
import { Response, Request } from "express";

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
    res.render("topic-list", { subject });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

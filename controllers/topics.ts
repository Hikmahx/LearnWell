const Topic = require("../models/topic");

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

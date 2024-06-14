const Note = require("../models/Note");
import { Response, Request } from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";
import { IUser } from "../models/User";

interface AuthRequest extends Request {
  user?: IUser;
}

// @ route  GET /api/notes
// @ desc   Fetch all notes
// @ access Private
export const getNotes = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const notes = await Note.find({user: userId});

    res.status(200).json(notes);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route  GET /api/notes/:id
// @ desc   Fetch single note
// @ access Public
export const getNoteById = async (req: Request, res: Response) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }

    res.status(200).json(note);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route  POST /api/notes
// @ desc   Create new note
// @ access Public
export const createNote = async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { noteColor, title, summary, category, subject, date, htmlContent } =
      req.body;

    const newNote = new Note({
      user: req.user?.id,
      noteColor,
      title,
      summary,
      category,
      subject,
      date,
      htmlContent,
    });

    const note = await newNote.save();

    res.status(201).json(note);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route  PUT /api/notes/:id
// @ desc  Update note
// @ access Private
export const updateNote = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { noteColor, title, summary, category, subject, date, htmlContent } =
      req.body;

    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          noteColor,
          title,
          summary,
          category,
          subject,
          date,
          htmlContent,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ route  DELETE /api/notes/:id
// @ desc   Delete note
// @ access Private
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }

    res.status(200).json({ msg: "Note is successfully deleted" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

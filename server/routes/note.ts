import express from "express";
import { body } from "express-validator";
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from "../controllers/note";

const router = express.Router();

// GET ALL NOTES
router.get("/", getNotes);

// GET NOTE BY ID
router.get("/:id", getNoteById);

// CREATE NEW NOTE
router.post("/", createNote);

// UPDATE NOTE
router.put("/:id", updateNote);

// DELETE NOTE
router.delete("/:id", deleteNote);

module.exports = router;
import { Schema, model, Document } from "mongoose";

export interface INote extends Document {
  noteColor: string;
  title: string;
  summary: string;
  category: string;
  subject: string;
  date: string;
  htmlContent: string;
}

const noteSchema = new Schema<INote>({
  noteColor: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  category: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: String, required: true },
  htmlContent: { type: String, required: true },
});

const Note = model<INote>("Note", noteSchema);

module.exports = Note;

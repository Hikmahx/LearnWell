import { Schema, model, Document } from "mongoose";

export interface IQuestion extends Document {
  question: string;
  options: string[];
  answer: string;
}

export interface IQuiz extends Document {
  title: string;
  questions: IQuestion[];
  topic: any;
}

const questionSchema = new Schema<IQuestion>({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
});

const quizSchema = new Schema<IQuiz>({
  title: { type: String, required: true },
  questions: { type: [questionSchema], required: true },
  topic: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
});

const Quiz = model<IQuiz>("Quiz", quizSchema);

module.exports = Quiz;

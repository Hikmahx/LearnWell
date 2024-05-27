import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  topics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },
  ],
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;

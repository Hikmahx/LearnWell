import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    //  Ensures that each title is unique within a subject, but not necessarily across all subjects in the database
    index: {
      unique: true,
      partialFilterExpression: { subject_id: { $exists: true } },
    },
  },
  video: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;

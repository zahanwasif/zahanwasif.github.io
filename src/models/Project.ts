import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for this project."],
    maxlength: [60, "Title cannot be more than 60 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description for this project."],
    maxlength: [1000, "Description cannot be more than 1000 characters"],
  },
  image: {
    type: String,
    required: [true, "Please provide an image URL for this project."],
  },
  technologies: [
    {
      type: String,
      required: [
        true,
        "Please provide at least one technology used in this project.",
      ],
    },
  ],
  demoUrl: {
    type: String,
  },
  githubUrl: {
    type: String,
    required: [true, "Please provide the GitHub URL for this project."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Project", ProjectSchema);


import mongoose from "mongoose";

const Course = mongoose.model(
  "Courses",
  new mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      category: { type: String, required: true },
      link: { type: String, required: false },
      description: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  )
);

export default Course;

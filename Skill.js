import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
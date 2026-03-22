import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    image: {
      type: String,
      default: "https://via.placeholder.com/600x350.png?text=Project"
    },
    liveLink: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
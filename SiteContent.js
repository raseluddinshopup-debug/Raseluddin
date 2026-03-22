import mongoose from "mongoose";

const siteContentSchema = new mongoose.Schema(
  {
    siteTitle: { type: String, default: "My Personal Website" },
    logoText: { type: String, default: "Rasel" },
    heroTitle: { type: String, default: "Hi, I'm Rasel Uddin" },
    heroSubtitle: {
      type: String,
      default: "Web developer, designer and creator."
    },
    heroImage: {
      type: String,
      default: "https://via.placeholder.com/400x400.png?text=Profile+Image"
    },
    aboutTitle: { type: String, default: "About Me" },
    aboutText: {
      type: String,
      default: "Write something about yourself from admin panel."
    },
    contactEmail: { type: String, default: "admin@example.com" },
    contactPhone: { type: String, default: "01700000000" },
    facebook: { type: String, default: "https://facebook.com" },
    github: { type: String, default: "https://github.com" },
    linkedin: { type: String, default: "https://linkedin.com" },
    footerText: { type: String, default: "© 2026 All rights reserved." }
  },
  { timestamps: true }
);

export default mongoose.model("SiteContent", siteContentSchema);
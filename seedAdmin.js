import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";
import SiteContent from "./models/SiteContent.js";
import Skill from "./models/Skill.js";
import Project from "./models/Project.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Admin.deleteMany({});
    await SiteContent.deleteMany({});
    await Skill.deleteMany({});
    await Project.deleteMany({});

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    await Admin.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      phone: process.env.ADMIN_PHONE,
      password: hashedPassword
    });

    await SiteContent.create({
      siteTitle: "Rasel Personal Website",
      logoText: "Rasel",
      heroTitle: "Hello, I'm Rasel Uddin",
      heroSubtitle: "I build websites and manage everything from my admin panel.",
      aboutTitle: "About Me",
      aboutText: "This text can be changed from admin panel.",
      contactEmail: process.env.ADMIN_EMAIL,
      contactPhone: process.env.ADMIN_PHONE,
      facebook: "https://facebook.com/",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      footerText: "© 2026 Rasel Uddin. All rights reserved."
    });

    await Skill.insertMany([
      { title: "HTML", description: "Semantic and clean markup." },
      { title: "CSS", description: "Responsive modern design." },
      { title: "JavaScript", description: "Interactive web features." }
    ]);

    await Project.insertMany([
      {
        title: "Portfolio Website",
        description: "A clean personal portfolio website.",
        liveLink: "https://example.com"
      },
      {
        title: "Business Landing Page",
        description: "Modern landing page for brands.",
        liveLink: "https://example.com"
      }
    ]);

    console.log("Seed complete");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();
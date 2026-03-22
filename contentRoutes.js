import express from "express";
import SiteContent from "../models/SiteContent.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/public", async (req, res) => {
  try {
    let content = await SiteContent.findOne();
    if (!content) {
      content = await SiteContent.create({});
    }
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/admin", protect, async (req, res) => {
  try {
    let content = await SiteContent.findOne();
    if (!content) {
      content = await SiteContent.create({});
    }
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/admin", protect, async (req, res) => {
  try {
    let content = await SiteContent.findOne();
    if (!content) {
      content = await SiteContent.create({});
    }

    Object.assign(content, req.body);
    await content.save();

    res.json({ message: "Site content updated", content });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
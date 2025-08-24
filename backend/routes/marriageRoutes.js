import express from "express";
import Marriage from "../models/Marriage.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const marriage = new Marriage(req.body);
    await marriage.save();
    res.status(201).json(marriage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const marriages = await Marriage.find();
    res.json(marriages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const marriage = await Marriage.findById(req.params.id);
    if (!marriage) return res.status(404).json({ error: "Marriage not found" });
    res.json(marriage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedMarriage = await Marriage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMarriage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Marriage.findByIdAndDelete(req.params.id);
    res.json({ message: "Marriage deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

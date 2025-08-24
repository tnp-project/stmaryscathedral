import express from "express";
import Death from "../models/Death.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const death = new Death(req.body);
    await death.save();
    res.status(201).json(death);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const deaths = await Death.find();
    res.json(deaths);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const death = await Death.findById(req.params.id);
    if (!death) return res.status(404).json({ error: "Death record not found" });
    res.json(death);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedDeath = await Death.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDeath);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Death.findByIdAndDelete(req.params.id);
    res.json({ message: "Death record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

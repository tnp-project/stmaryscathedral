import express from "express";
import Baptism from "../models/Baptism.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const baptism = new Baptism(req.body);
    await baptism.save();
    res.status(201).json(baptism);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const baptisms = await Baptism.find();
    res.json(baptisms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const baptism = await Baptism.findById(req.params.id);
    if (!baptism) return res.status(404).json({ error: "Baptism record not found" });
    res.json(baptism);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedBaptism = await Baptism.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBaptism);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Baptism.findByIdAndDelete(req.params.id);
    res.json({ message: "Baptism record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

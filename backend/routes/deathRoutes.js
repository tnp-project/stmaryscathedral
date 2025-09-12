import express from "express";
import Death from "../models/Death.js";
import Member from "../models/Member.js";

const router = express.Router();

// ➕ Add Death Record
router.post("/", async (req, res) => {
  try {
    const { memberId, familyNumber, ...deathData } = req.body;

    // 1. Save the death record
    const newDeath = new Death({
      memberId,
      familyNumber,
      ...deathData,
    });
    await newDeath.save();

    // 2. Mark the member as deceased
    const deceasedMember = await Member.findByIdAndUpdate(
      memberId,
      { hof: false, deceased: true }, // you may need to add "deceased" field in Member schema
      { new: true }
    );

    // 3. If deceased was HoF → pick a new HoF
    if (deceasedMember && deceasedMember.hof === true) {
      const newHof = await Member.findOneAndUpdate(
        {
          family_number: familyNumber,
          _id: { $ne: memberId }, // not the deceased
          deceased: { $ne: true }, // must be alive
        },
        { hof: true },
        { new: true }
      );

      if (!newHof) {
        console.warn(`⚠️ No eligible new HoF found for family ${familyNumber}`);
      } else {
        console.log(`✅ New HoF for family ${familyNumber}: ${newHof.name}`);
      }
    }

    res.status(201).json({ message: "Death record added", newDeath });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// 📜 Get All Death Records
router.get("/", async (req, res) => {
  try {
    const deaths = await Death.find();
    res.json(deaths);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📜 Get One Death Record
router.get("/:id", async (req, res) => {
  try {
    const death = await Death.findById(req.params.id);
    if (!death) return res.status(404).json({ error: "Death record not found" });
    res.json(death);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏️ Update Death Record
router.put("/:id", async (req, res) => {
  try {
    const updatedDeath = await Death.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDeath);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ❌ Delete Death Record
router.delete("/:id", async (req, res) => {
  try {
    await Death.findByIdAndDelete(req.params.id);
    res.json({ message: "Death record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

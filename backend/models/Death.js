// Death.js
import mongoose from "mongoose";

const deathSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
  memberName: { type: String, required: true },
  familyNumber: { type: String, required: true },
  dod: { type: Date, required: true },
  reason: { type: String },
  place_of_death: { type: String },
  notes: { type: String }
}, { timestamps: true });

export default mongoose.model("Death", deathSchema);

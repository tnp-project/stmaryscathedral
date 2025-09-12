import mongoose from "mongoose";

const baptismSchema = new mongoose.Schema(
  {
    memberName: { type: String, required: true },
    familyNumber: { type: String, required: true },
    baptismDate: { type: Date, required: true },
    priest: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Baptism", baptismSchema);

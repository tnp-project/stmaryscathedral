import mongoose from "mongoose";

const baptismSchema = new mongoose.Schema({
  baptism_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dob: { type: Date },
  baptism_name: { type: String },
  officiant: { type: String }
}, { timestamps: true });

export default mongoose.model("Baptism", baptismSchema);

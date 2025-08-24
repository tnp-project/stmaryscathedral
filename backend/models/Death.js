import mongoose from "mongoose";

const deathSchema = new mongoose.Schema({
  sl_no: { type: Number, required: true },
  name: { type: String, required: true },
  date: { type: Date },  // Record created date
  death_date: { type: Date },
  burial_date: { type: Date },
  officiant_name: { type: String }
}, { timestamps: true });

export default mongoose.model("Death", deathSchema);

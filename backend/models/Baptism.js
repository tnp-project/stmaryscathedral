import mongoose from "mongoose";

const BaptismSchema = new mongoose.Schema({
  sl_no: {
    type: Number,
    required: true,
    unique: true,
  },
  reg_no_family_no: {
    type: String,
    required: true,
  },
  church_of_child: {
    type: String,
  },
  dob: {
    type: Date,
    required: true,
  },
  date_of_baptism: {
    type: Date,
    required: true,
  },
  place: {
    type: String,
  },
  house_name: {
    type: String,
  },
  father: {
    type: String,
  },
  mother: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  bapt_name: {
    type: String,
    required: true,
  },
  official_name: {
    type: String,
  },
  godparent_name: {
    type: String,
  },
  godparent_house_name: {
    type: String,
  },
  church_where_baptised: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model("BaptismRecord", BaptismSchema);

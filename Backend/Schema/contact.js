import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  status: { type: String, default: "Unread" }
}, { timestamps: true });
export default contactSchema
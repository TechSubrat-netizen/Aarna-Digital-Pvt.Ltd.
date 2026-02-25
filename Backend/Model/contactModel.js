import mongoose from "mongoose";
import contactSchema from "../Schema/contact.js";
const contactModel=mongoose.model("contact",contactSchema);
export default contactModel;
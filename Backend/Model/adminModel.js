import mongoose from "mongoose";
import adminSchema from "../Schema/adminSchema.js";
 const adminModel=mongoose.model('admin',adminSchema)
 export default adminModel;
import mongoose from "mongoose";
import applicationSchema from "../Schema/application.js";
const applicationModel=mongoose.model("application",applicationSchema);
export default applicationModel;
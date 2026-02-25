import mongoose from "mongoose";
import jobSchema from "../Schema/Job.js";
 const jobModel=mongoose.model("job",jobSchema);
 export default jobModel;
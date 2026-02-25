import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: String,
  salary: String,
   jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract", "Remote"],
      default: "Full-time"
    },
    experienceLevel: {
      type: String,
      enum: ["Fresher", "Junior", "Mid", "Senior","Exprienced"],
      default: "Junior"
    }, 
    skills:{type: [String], required: true},
   status: {
      type: String,
      enum: ["Open", "Closed", "Paused"],
      default: "Open"
    },
}, { timestamps: true });
 export default  jobSchema
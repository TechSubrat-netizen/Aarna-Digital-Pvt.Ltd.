import mongoose from "mongoose";
const applicationSchema = new mongoose.Schema(
   {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },

    fullName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },

    phone: {
      type: String,
      required: true
    },

    yearsOfExperience: {
      type: Number,
      required: true,
      min: 0
    },

    currentCompany: {
      type: String,
      trim: true
    },

    currentCTC: {
      type: Number
    },

    expectedCTC: {
      type: Number
    },

    skills: [
      {
        type: String,
        trim: true
      }
    ],

    resumeUrl: {
      type: String,
      required: true
    },

  }, { timestamps: true });
export default applicationSchema
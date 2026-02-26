import applicationModel from "../Model/applicationModel.js";
import path from 'path'

// Get all applications
export const getAllApplications = async (req, res) => {
  try {
    const applications = await applicationModel.find();
    res.status(200).json({
      message: "Applications retrieved successfully",
      applications
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving applications",
      error: error.message
    });
  }
};

// Get a single application by ID
export const getApplicationById = async (req, res) => {
  try {
    const { _id } = req.params;
    const application = await applicationModel.findById(_id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json({
      message: "Application retrieved successfully",
      application
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving application",
      error: error.message
    });
  }
};

// Create application
export const createApplication = async (req, res) => {
  try {
    const data = req.body;

    if (req.file) {
      data.resumeUrl = req.file.path;
    }

    const newApplication = new applicationModel(data);
    await newApplication.save();

    res.status(201).json({
      message: "Application submitted successfully",
      application: newApplication
    });

  } catch (error) {
    res.status(500).json({
      message: "Error submitting application",
      error: error.message
    });
  }
};
import express from "express";
import { createApplication, getAllApplications, getApplicationById } from "../Controller/applicationController.js";
import { upload } from './../Middleware/upload.js';

const applicationRoute = express.Router();

// Read operations
applicationRoute.get('/', getAllApplications);
applicationRoute.get('/:_id', getApplicationById);

// Write operations
applicationRoute.post("/user", upload.single("resume"), createApplication);

export default applicationRoute;
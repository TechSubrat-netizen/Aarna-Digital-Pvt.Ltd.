import express from "express";
import { createJob, deleteJob, updateJob, getAllJobs, getJobById } from "../Controller/jobController.js";
import verifyToken from "../Middleware/authMiddlewaare.js";
const jobRoute = express.Router();

// Read operations
jobRoute.get('/', getAllJobs);
jobRoute.get('/:_id', getJobById);

// Write operations
jobRoute.post('/create',verifyToken, createJob);
jobRoute.put('/update/:_id',verifyToken, updateJob);
jobRoute.delete('/delete/:_id',verifyToken, deleteJob);

export default jobRoute;
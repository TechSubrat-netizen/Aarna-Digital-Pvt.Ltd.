import jobModel from "../Model/jobModel.js";

// Get all jobs
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await jobModel.find();
        res.status(200).json({ message: "Jobs retrieved successfully", jobs });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving jobs", error: error.message });
    }
};

// Get a single job by ID
export const getJobById = async (req, res) => {
    try {
        const { _id } = req.params;
        const job = await jobModel.findById(_id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({ message: "Job retrieved successfully", job });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving job", error: error.message });
    }
};

// Create a new job
 export const createJob = async (req, res) => {
    try {
         const data = req.body;
         console.log(data);
         
        const newJob = new jobModel(data);
        await newJob.save();
        res.status(201).json({ message: "Job created successfully", job: newJob });
        
    } catch (error) {
        res.status(500).json({ message: "Error creating job", error: error.message });
    }
  
         }
         //update a job
 export const updateJob = async (req, res) => {
    try {
            const { _id } = req.params;  
             console.log(_id)
            const data = req.body;
            console.log(data);
            
            const updatedJob = await jobModel.findByIdAndUpdate(_id, data, { new: true });
            console.log(updatedJob);
            
            if (!updatedJob) {
                return res.status(404).json({ message: "Job not found" });
            }
                res.status(200).json({ message: "Job updated successfully", job: updatedJob });

    } catch (error) {
        
    }
 }
 //Delete a job
    export const deleteJob = async (req, res) => {
        try {
            const { _id } = req.params;
            const deletedJob = await jobModel.findByIdAndDelete(_id);
            if (!deletedJob) {
                return res.status(404).json({ message: "Job not found" });
            }  
                res.status(200).json({ message: "Job deleted successfully" });                                                                                                 
            
        } catch (error) {
                res.status(500).json({ message: "Error deleting job", error: error.message });
        }
    }
import { config } from 'dotenv';
import express from 'express';
import connectDb from './config/db.js';
import adminRoute from './Routes/adminRoute.js';
import jobRoute from './Routes/jobRoute.js';
import applicationRoute from './Routes/applicationRoute.js';
import cors from "cors"
const app=express()
config()
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/',(req,res)=>{
  res.send("Hello world")
})

//Router
app.use('/admin', adminRoute);
app.use('/jobs', jobRoute);
app.use('/applications', applicationRoute);



// Database connection

connectDb()


//Starting the server
const port=process.env.PORT
app.listen(port,"0.0.0.0",()=>{
    console.log(`app is running on port:${port}`);
    
})
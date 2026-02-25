
import adminModel from "../Model/adminModel.js";
import { hashedPassword,verifyPassword } from "../Utils/bcrypt.js";
import { generateToken } from "../Utils/jwt.js";

export const signup= async(req,res)=>{
    try {
         const data=req.body
         console.log(data);
          const ha_password=await hashedPassword(data.password)
           console.log(ha_password);
           const newAdmin=  new adminModel({...data,password:ha_password})
           await newAdmin.save()
           let {accessToken,refreshToken}=await generateToken(newAdmin._id);
           console.log(accessToken,refreshToken);
           
           res.status(200). send({message:"Admin created sucessfully",accessToken,refreshToken,admin: newAdmin})
     
        
    } catch (error) {
         console.log(error)
         res.status(500).send({message:"Error creating admin", error: error.message})
    }
}

export const Login= async (req,res)=>{
    try {
         const data =req.body
         if(data){
            const  admin=await adminModel.findOne({username:data.username})
          
            
            if(admin){
            const verifyPass=await verifyPassword(data.password,admin.password)
          
            
            if(verifyPass){
               let {accessToken,refreshToken}=await generateToken(admin._id);
             
           res.status(200). send({message:"Login sucessfully",accessToken,refreshToken,admin})
            }
            else{
                res.status(401).send({message:'Wrong password'})
            }
                
            }
            else{
                res.status(404).send({message:"User not found"})
            }

         }
         else{
            res.status(400).send({message:"Fillup all the details"})
         }
        
    } catch (error) {
        res.status(500).send({message:"Error logging in", error: error.message})
    }
}

// Get admin by ID
export const getAdminById = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await adminModel.findById(id).select('-password');
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json({ message: "Admin retrieved successfully", admin });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving admin", error: error.message });
    }
};
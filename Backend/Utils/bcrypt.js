import bcrypt from 'bcrypt';
const saltround=parseInt(process.env.SALTROUND)
 export const hashedPassword=async(password)=>{
    try {
        let hashedpassword=await bcrypt.hash(password,saltround);
    return hashedpassword
        
    } catch (error) {
        console.log(error);
        
    }
    
 }
 export const verifyPassword=async (password,hashedPassword)=>{
    try {
        const matchpassword=await bcrypt.compare(password,hashedPassword);
        return matchpassword
    } catch (error) {
         console.log(error)
    }
 }
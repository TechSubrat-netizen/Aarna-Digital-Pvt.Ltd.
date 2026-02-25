import jwt from "jsonwebtoken";

// Make sure we use the environment variable

export const generateToken =  (adminId) => {
  const secretKey = process.env.SECRET_KEY 
  console.log(secretKey);
  
  try {
    console.log("Using secret key:", secretKey);
    const accessToken = jwt.sign({ id: adminId }, secretKey, { expiresIn: "15m" });
    const refreshToken =  jwt.sign({ id:adminId }, secretKey, { expiresIn: "7d" }); // usually longer

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("JWT Error:", error);
    throw error;
  }
};

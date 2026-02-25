import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log(token);
    

    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: "No token provided" 
      });
    }

    const secretKey = process.env.SECRET_KEY || "your-secret-key";
    console.log(secretKey);
    
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.log(err);
        
        return res.status(403).json({ 
          success: false,
          message: "Invalid or expired token" 
        });
      }

      req.user = decoded;
      console.log(req.user);
      
      next();
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Server error",
      error: error.message 
    });
  }
};

export default verifyToken;

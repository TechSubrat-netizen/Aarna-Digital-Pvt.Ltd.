import mongoose from "mongoose";
import notificationSchema from "../Schema/Notification.js";
 const notificationModel=mongoose.model("Notification", notificationSchema);
 export default notificationModel;
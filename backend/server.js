import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import dotenv from "dotenv"
import AuthRoute from "./routes/authRoutes.js"
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
dotenv.config();
app.use(express.json())
app.use('/api/auth',AuthRoute)
app.listen(PORT, () => {
  console.log("Backend is working fine at ", PORT);
  connectDB();
});

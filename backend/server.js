import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import dotenv from "dotenv"
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
dotenv.config();
app.listen(PORT, () => {
  console.log("Backend is working fine at ", PORT);
  connectDB();
});

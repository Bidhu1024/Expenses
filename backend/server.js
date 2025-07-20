//dSEcp7u4F7oQvcvR - mongo key

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
  console.log(process.env.MONGO_URI);
  connectDB();
});

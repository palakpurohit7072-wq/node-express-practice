import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
 app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
const PORT = process.env.PORT || 3000;
 connectDB()

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT} `);
})
import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
const app = express();
app.use(express.json());

connectDB();
app.use("/students", studentRoutes);
app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});
import express from "express";
import dotenv from "dotenv";

import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.PORT}`);
});
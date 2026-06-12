import express from "express";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";

const app = express();

app.use(express.json());

connectDB();

const PORT = 8000;

app.use("/urls", urlRoutes);

app.listen(PORT, () => {
  console.log("app is listening on port", PORT);
});
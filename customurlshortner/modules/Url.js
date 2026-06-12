import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortCode: String,
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
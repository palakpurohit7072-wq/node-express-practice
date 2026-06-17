import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", mySchema);

export default User;
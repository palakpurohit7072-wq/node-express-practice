import mongoose from "mongoose"
const connectDB = async()=>{
    try {
// const myconnection = await mongoose.connect("");
const myconnection = await mongoose.connect(
  "mongodb://127.0.0.1:27017/customurlshortner"
);
console.log("db connected");
}
catch (e){
    console.log("error.e");
}
}
export default connectDB
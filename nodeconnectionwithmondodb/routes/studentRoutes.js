import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
  const student = await Student.create(req.body);
  res.send("Student Saved Successfully");
  } 

catch (error) {
  console.log(error);
  res.send(error.message);
}
// catch (error) {
//   res.send("Error While Saving Student");
// }
});

export default router;
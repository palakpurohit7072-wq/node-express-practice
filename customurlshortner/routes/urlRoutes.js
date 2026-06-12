import express from "express";
import Url from "../modules/Url.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const shortCode = Math.random()
      .toString(36)
      .substring(2, 8);

    const url = await Url.create({
      originalUrl: req.body.originalUrl,
      shortCode,
    });

    res.send(url);
  } catch (err) {
    console.log(err);
  }
});
router.get("/:shortCode", async (req, res) => {
  try {
    const url = await Url.findOne({
      shortCode: req.params.shortCode,
    });

    if (!url) {
      return res.send("URL not found");
    }

    res.redirect(url.originalUrl);
  } catch (err) {
    console.log(err);
  }
});

export default router;
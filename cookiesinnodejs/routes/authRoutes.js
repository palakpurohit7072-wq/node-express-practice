import express from "express";

import { login } from "../controllers/authController.js";

import { isLoggedIn } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);

router.get(
  "/profile",
  isLoggedIn,
  (req, res) => {
    res.json({
      message: "Welcome User",
      user: req.user,
    });
  }
);

export default router;
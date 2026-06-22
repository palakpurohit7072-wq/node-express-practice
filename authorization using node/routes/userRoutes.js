import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../model/User.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();


// REGISTER ROUTE
router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email Already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User Registered Successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// LOGIN ROUTE
router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User Not Found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            message: "Login Successful",
            token
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// PROFILE ROUTE
router.get("/profile", auth, (req, res) => {

    res.json({
        message: "Profile Page",
        user: req.user
    });

});


// ADMIN ROUTE
router.get("/admin", auth, admin, (req, res) => {

    res.json({
        message: "Welcome Admin"
    });

});

export default router;
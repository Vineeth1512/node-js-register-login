const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/register", (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!email || !name || !password) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid Email."
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters."
            });
        }

        console.log("Request Body:", req.body); // Log the request body before parsing

        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.error("Error in register route:", error);
        return res.status(500).json({
            message: "Internal Server Error."
        });
    }
}, userController.register);

router.post("/login", (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        console.log("Request Body:", req.body); // Log the request body before parsing

        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.error("Error in login route:", error);
        return res.status(500).json({
            message: "Internal Server Error."
        });
    }
}, userController.login);

module.exports = router;
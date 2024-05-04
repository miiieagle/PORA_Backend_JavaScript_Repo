const express = require("express");

const router = express.Router();

router.post("/register", (req, res, next) => {
    res.status(201).json({ "message": "Account created" });
});

router.post("/login", (req, res, next) => {
    res.status(201).json("Welcome...");
});

router.get("/", (req, res, next) => {
    res.send("users dashboard");
});

module.exports = router;

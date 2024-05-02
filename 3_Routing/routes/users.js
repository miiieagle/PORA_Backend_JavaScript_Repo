const express = require("express")

const router = express.Router()

router.post("/register", (req, res, next) => {
    res.status(201).json({"account created"})
});

router.post("/login", (req, res, next) => {
    res.send("Welcome...")
});

router.get("/", (req, res, next) => {
    res.send("users dashbord")
});

module.exports = router
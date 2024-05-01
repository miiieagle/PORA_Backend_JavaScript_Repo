const express = require("express")

const router = express.Router()

router.post("/product", (req, res, next) => {
    res.send("welcome")
});

module.exports = router
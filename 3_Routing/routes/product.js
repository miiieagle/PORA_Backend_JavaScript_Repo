const express = require("express")

const router = express.Router()
router.post("/", (req, res, next) => {
    res.send(
        {
          msg:"Product created successfully"
        )
});

router.get("/", (req, res, next) => {
    res.send({
        product:{
            name_of_product: "IPAD",
            model: "IPAD 2334ml",
            image: "http/image",
            address: "no 1, grace street"
        }
    })
});

module.exports = router
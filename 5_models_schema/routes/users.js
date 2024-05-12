const express = require("express");
const userModel = require("../models/users")  //importing the users from the models
const router = express.Router();


//posting users to the data base
router.post("/register", async(req, res, next) => {
    const {email, password} = req.body
    const saveUser = await userModel.create({
        email: email,
        password: password
    })
    res.status(201).json({ 
        "message": "Account created",
        userDetails: saveUser
    });
});

//getting users from data base
router.get("/", async(req, res, next) => {
    const userExist = await userModel.find({})
    res.status(200).json({
        data:userExist
    })
})

//getting one parameter from data base
router.post("/email", async(req, res, next) => {
    const {email, password} = req.body
    const userExist = await userModel.findOne({email:email})
    res.status(200).json({
        data:userExist
    })
})

module.exports = router;
const express = require("express");
const userModel = require("../models/users")  //importing the users from the models
const router = express.Router();


//Validation for email and password
router.post("/register", async(req, res, next) => {
    const {email, password} = req.body
    if(!email){
        return res.status(400).json({
            msg: "email is required",
        })
    }
    
    if(!password){
        return res.status(400).json({
            msg: "password is required",
        })
    }
    else{

    }
    res.status(201).json({ 
        "message": "Account created successfully",
        
    });
});


//getting users from data base
router.get("/", async(req, res, next) => {
    const userExist = await userModel.find({})
    res.status(200).json({
        data:userExist
    })
})


module.exports = router;

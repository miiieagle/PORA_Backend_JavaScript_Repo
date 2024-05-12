const express = require("express");
const userModel = require("../models/users")  //importing the users from the models
const router = express.Router();

const bcrypt = require("bcrypt") //importing bcrypt

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

//encryption
    const salt = await bcrypt.genSaltSync(10) //using salt to encrypt
    const hashedPassword = await bcrypt.hash(password, salt) //using hash to encrypt and add to salt
    console.log({hashedPassword})
   // console.log({salt})

//saving data to the database
const saveUser = await userModel.create({
    email: email,
    password: hashedPassword
})

    res.status(201).json({ 
        "message": "Account created successfully",
        
    });
});

//Validation of login
router.post("/login", async(req, res, next) => {
    const {email, password} = req.body
    //getting email
    const userExist = await userModel.findOne({email:email})
    if (!userExist){
        return res.status(400).json({
            msg:"user account not found please signup"
        })
    }
    const passwordMatches = await bcrypt.compare(password, userExist.password)
    if (!passwordMatches){
        return res.status(400).json({
            msg:"Invalid password"
        })
    }


    res.status(201).json({
        msg:"welcome to PORA academy",
        userDetails:userExist
    })
        
});

//getting users from data base
router.get("/", async(req, res, next) => {
    const userExist = await userModel.find({})
    res.status(200).json({
        data:userExist
    })
})

//getting one parameter from data base
/*router.post("/email", async(req, res, next) => {
    const {email, password} = req.body
    const userExist = await userModel.findOne({email:email})
    res.status(200).json({
        data:userExist
    })
})
*/
module.exports = router;

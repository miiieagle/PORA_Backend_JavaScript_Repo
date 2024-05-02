const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
//adding application midware
app.use(express.urlencoded({extended: true}))
app.use(express.json({}));

//port listening
app.listen(port, () => {
    console.log("listening on port:" + port)
});

//GET Request
app.get("/student", (req, res, next) => {
    const studentDetails ={
       name: "Jude Adeyemi",
       age: 16,
       class: 2023,
    }
    res.send(studentDetails)
})

//POST Request

app.post("/register", (req, res, next) => {
    const body = req.body
    console.log(body)
    res.send({
        responseBody: req.body,
        "msg": "user sucessfully register"
    })
})

//PUT Request
app.put("/update", (req, res, next) => {
    const {full_name, age, address} = req.body;
    const user_details = {
        email: "grace@gmail.com",
        password: "hfgg123",
        full_name: full_name,
        age: age,
        address: address
    }
    res.send({
        user_details,
        msg: "Update successfully",
    });
})


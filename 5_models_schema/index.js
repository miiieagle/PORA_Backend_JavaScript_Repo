const express = require("express");
require("dotenv").config();
const app = express();
const setupRoutes = require("./statup/routes");  //routing
const port = process.env.PORT; 

//importing mongoose 
const mongoose = require("mongoose");    
const db = process.env.db;  

//adding application midware
app.use(express.urlencoded({extended: true}))
app.use(express.json({}));

//calling of mongoose
mongoose
    .connect(db)
    .then(() => console.log("crashdevDB connected successfully...."))

setupRoutes(app); //calling of router function

//port listening
app.listen(port, () => {
    console.log("listening on port:" + port)
});




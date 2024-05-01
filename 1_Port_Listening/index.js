const express = require("express");
require("dotenv").config();
const app = express()
//secret key
console.log(process.env.Deborah_key)
//listening to the port
const port = process.env.PORT
app.listen(port, () => {
   console.log("listening on port:" + port)
})
//routing
app.get("/student", (req, res, next) => {
const studentDetails ={
   name: "Jude Adeyemi",
   age: 30,
   class: 2023,
}
res.send(studentDetails)
})
const dev = (display) => {
   console.log("Adeyemi Deborah Doyinsola")
   }
   dev()
      
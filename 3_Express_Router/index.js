const express = require("express");
require("dotenv").config();
const app = express();
const setupRoutes = require("./statup/routes");
const port = process.env.PORT;
//adding application midware
app.use(express.urlencoded({extended: true}))
app.use(express.json({}));

setupRoutes(app);
//port listening
app.listen(port, () => {
    console.log("listening on port:" + port)
});




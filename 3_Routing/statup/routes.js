const usersRoute = require("../routes/users")
const productRoute = require("../routes/product")


module.exports = (app) =>{
    app.use("/users", usersRoute)
    app.use("/products", productRoute)
}

module.exports = router
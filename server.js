require("dotenv").config({ path: "config/config.env" })
const express = require("express")
const app = express()
const connectedDB = require("./config/db")
const PORT = 3000
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

connectedDB()

app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const order = require("./routes/Order.route")
const product = require("./routes/product")
const categories = require("./routes/categories")
const User = require("./routes/User")

app.use("/product", product)
app.use("/categories", categories)
app.use("/product", product)
app.use("/User", User)
app.use(order)

app.listen(PORT, () => {
  console.log(`Server has started at ${PORT}`)
})

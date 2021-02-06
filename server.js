require("dotenv").config({ path: "config/config.env" })
const express = require("express")
const app = express()
<<<<<<< HEAD
const connectedDB = require("./config/db")
const PORT = 3000
=======
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const PORT = 6000
const connectDB = require('./config/db')
dotenv.config({ path: './config/config.env'})
connectDB()


app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const product = require("./routes/product")
const order = require('./routes/Order.route')

>>>>>>> 7191ffeaf1e7b84adf55efb5649425cdd341d064

app.get("/", (req, res) => {
  res.json({ Message: "Hello from e-commerce" })
})

<<<<<<< HEAD
connectedDB()

const product = require("./routes/product")
const categories = require("./routes/categories")

app.use("/product", product)
app.use("/categories", categories)
=======
const User=require("./routes/User")

app.use("/product", product)
app.use("/User",User)
app.use(order)


>>>>>>> 7191ffeaf1e7b84adf55efb5649425cdd341d064

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server has started at ${PORT}`)
})

require("dotenv").config({ path: "config/config.env" })
const express = require("express")
const app = express()
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;

app.use(express.json())

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();
const connectedDB = require("./config/db")
const PORT = 3000
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

connectedDB()

app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const product = require("./routes/product");
const cart = require('./routes/cart');

app.use("/api", product, cart);

const order = require("./routes/Order.route")
const product = require("./routes/product")
const categories = require("./routes/categories")
const User = require("./routes/User")

app.use("/categories", categories)
app.use("/User", User)
app.use(order)

app.listen(PORT, () => {
  console.log(`Server has started at ${PORT}`)
})

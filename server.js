const express = require("express")
const app = express()
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

app.get("/", (req, res) => {
  res.json({ Message: "Hello from e-commerce" })
})

const product = require("./routes/product")
const User=require("./routes/User")

app.use("/product", product)
app.use("/User",User)

app.listen(PORT, () => {
  console.log(`Server has started at ${PORT}`)
})

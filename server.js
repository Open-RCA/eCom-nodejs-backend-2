require("dotenv").config({ path: "config/config.env" })
const express = require("express")
const app = express()
const connectedDB = require("./config/db")
const PORT = 3000

app.get("/", (req, res) => {
  res.json({ msg: "Hello from e-commerce" })
})

connectedDB()

const product = require("./routes/product")
const categories = require("./routes/categories")

app.use("/product", product)
app.use("/categories", categories)

app.listen(PORT, () => {
  console.log(`Server has started at ${PORT}`)
})

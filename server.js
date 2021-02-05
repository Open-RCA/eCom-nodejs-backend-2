const express = require("express")
const app = express()
const product = require("./routes/product")
const order = require('./routes/Order.route')

app.get("/", (req, res) => {
  res.json({ msg: "Hello from e-commerce" })
})

app.use("/product", product)
app.use(order)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server has started at ${PORT}`)
})

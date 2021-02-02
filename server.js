const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.json({ msg: "Hello from e-commerce" })
})

const product = require("./routes/product")

app.use("/product", product)

app.listen(PORT, () => {
  console.log(`Server has started at ${PORT}`)
})

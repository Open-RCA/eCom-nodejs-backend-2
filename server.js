const express = require("express")
const app = express()
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;

app.use(express.json())

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello from e-commerce" })
})

const product = require("./routes/product");
const cart = require('./routes/cart');

app.use("/api", product, cart);

app.listen(PORT, () => {
  console.log(`Server has started at ${PORT}`)
})

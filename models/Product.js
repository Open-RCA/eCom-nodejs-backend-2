const mongoose = require("mongoose")

const ProductModel = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
})

module.exports = mongoose.model("Product", ProductModel)

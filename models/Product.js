const mongoose = require("mongoose")

const ProductModel = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  product_category_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }
  ],
  product_price: {
    type: Number,
    required: true
  },
  product_description: {
    type: String,
    required: true
  },
  in_stock: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default:Date.now()
  }
  
})

module.exports = mongoose.model("Product", ProductModel)

const mongoose = require("mongoose")

const CartModel = new mongoose.Schema({
  customer_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer"
    }
  ],
  product_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  product_price: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default:Date.now()
  }
})

module.exports = mongoose.model("Cart", CartModel)

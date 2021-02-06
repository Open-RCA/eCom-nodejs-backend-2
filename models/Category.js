const mongoose = require("mongoose")

const categoriesModel = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Category", categoriesModel)

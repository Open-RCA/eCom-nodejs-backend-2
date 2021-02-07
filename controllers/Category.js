const Category = require("../models/Category")

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json({ success: true, data: categories })
  } catch (error) {
    res.status(400).json({ success: false, data: [] })
  }
}

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id })
    res.status(200).json({ success: true, data: category })
  } catch (error) {
    res.status(400).json({ success: false, data: [] })
  }
}

exports.updateCategory = async (req, res) => {
  try {
    let category = await Category.findById(req.params.id)

    if (!category) {
      res
        .status(400)
        .json({ success: true, msg: "Category not found", data: [] })
    }

    category = await Category.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ success: true, data: category })
  } catch (error) {
    res.status(400).json({ success: false, data: [] })
  }
}

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findOneAndRemove({ _id: req.params.id })
    res.status(200).json({ success: true, data: [] })
  } catch (error) {
    res.status(400).json({ success: false, data: [] })
  }
}

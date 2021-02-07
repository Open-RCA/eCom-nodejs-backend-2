const epxress = require("express")
const router = epxress.Router()

const {
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/Category")

router.route("/").get(getAllCategories)
router.route("/:id").get(getCategory).put(updateCategory).delete(deleteCategory)

module.exports = router

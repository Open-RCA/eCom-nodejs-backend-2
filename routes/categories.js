const epxress = require("express")
const router = epxress.Router()

const { getAllCategories } = require("../controllers/Category")

router.route("/").get(getAllCategories)

module.exports = router

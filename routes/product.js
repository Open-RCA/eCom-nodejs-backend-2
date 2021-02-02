const express = require("express")
const router = express.Router()
const { getProducts } = require("../controllers/Product")

router.route("/").get(getProducts)

module.exports = router

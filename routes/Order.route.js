const express = require('express')
const { addOrder } = require('../controllers/Order.controller')
const { protect } = require('../middleware/auth')
const router = express.Router()


router.route('/api/new-order').post([protect,addOrder])

module.exports = router
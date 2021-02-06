const express = require('express')
const { addOrder } = require('../controllers/Order.controller')
const router = express.Router()


router.route('/api/orders').post(addOrder)

module.exports = router
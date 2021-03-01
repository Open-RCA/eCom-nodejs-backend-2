const express = require('express')
const { addOrder, getAllOrders, getOrderById } = require('../controllers/Order.controller')
const { protect } = require('../middleware/auth')
const router = express.Router()


router.route('/api/new-order').post([protect,addOrder])
router.route('/api/get-order/:id').get([getOrderById])
router.route('/api/get-all-orders').get([getAllOrders])

module.exports = router
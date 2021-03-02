const express = require('express')
const { addOrder, changeOrderStatus, deleteOrder, ordersByStatus } = require('../controllers/Order.controller')
const { protect } = require('../middleware/auth')
const router = express.Router()


router.route('/api/new-order').post([protect,addOrder])
router.route('/api/change-status/:id').put(changeOrderStatus)
router.route('/api/orders-by-status/:status').get(ordersByStatus)
router.route('/api/cancel-order/:id').delete(deleteOrder)

module.exports = router
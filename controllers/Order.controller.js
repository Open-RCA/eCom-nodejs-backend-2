const Order = require('../models/Order.model')

exports.addOrder = async(req, res) =>{
    try {
        const order = new Order(req.body)
        await order.save()
        res.status(201).send(order)
    } catch (error) {
        res.status(500).send()
    }
}

exports.cancelOrder = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
}
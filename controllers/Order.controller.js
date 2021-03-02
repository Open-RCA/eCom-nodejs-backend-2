const {Order, validateOrder} = require('../models/Order.model')
const {OrderDetails, validateOrderDetails} = require('../models/OrderDetails.model')

/**
 * add a new order
 * @param {object} req request
 * @param {object} res response
 */
exports.addOrder = async(req, res) =>{
    try {
        if(validateOrder({customer_id: req.user._id,order_date: Date(req.body.date)}).error){
            return res.status(400).send()
        }
        const order = new Order({
            customer_id: req.user._id,
            order_date: Date(req.body.date),
        })
        await order.save()
        if(validateOrderDetails({
            order_id: order._id,
            products: req.body.products,
            total_price: req.body.total_price,
            status: req.body.status
        }).error){
            return res.status(400).send()
        }
        const orderDetails = new OrderDetails({
            order_id: order._id,
            products: req.body.products,
            total_price: req.body.total_price,
            status: req.body.status
        })
        
        await orderDetails.save()
        return res.status(201).send(order)
    } catch (error) {
        console.trace(error)
        return res.status(500).send({error: error.toString()})
    }
}

exports.getOrderById = (req,res)=> {
    Order.findById(req.params.id).populate("customer_id")
    .then(async(doc)=> {
        let details = await OrderDetails.findOne({order_id: doc._id})
        return res.send({order: doc, details: details})
    })
}

exports.getAllOrders = (req,res)=> {
    Order.find({}).populate("customer_id")
    .then(async(docs)=> {
        let results = []
        for(let i=0; i<docs.length; i++){
            let details = await OrderDetails.findOne({order_id: docs[i]._id})
            results.push({
                order: docs[i],
                details: details
            })
        }
        return res.send(results)
    })
}

exports.changeOrderStatus = async(req, res) =>{
    try {
        const update = {status: req.body.status}
        const order = {order_id: req.params.id}
        if(!order) return res.status(404).send()
        const updateOrder = await OrderDetails.findOneAndUpdate(order,update,{new: true})       
        res.status(200).send(updateOrder)
    } catch (error) {
        res.status(500).send()
    }
}

exports.deleteOrder = async(req, res) =>{
    try {
        const order = {order_id: req.params.id, status: 'new'}
        let deleteOrder = await OrderDetails.findOneAndDelete(order)
        if(!deleteOrder) return res.status(404).send()
        deleteOrder = await Order.findOneAndDelete({_id: req.params.id})
        res.send(deleteOrder)

    } catch (error) {
        
    }
}

exports.ordersByStatus = async(req, res) =>{
    try {
        const orders = await Order.find({status: req.params.status})
        res.send(orders)
    } catch (error) {
        res.status(500).send()
    }
}

//getting an order->egide
//getting all orders->egide
//getting orders by status 

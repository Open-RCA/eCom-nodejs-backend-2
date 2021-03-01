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

//getting an order->egide
//getting all orders->egide
//change order status->mike
//deletinga order (when status == new)->mike
//getting orders by status 

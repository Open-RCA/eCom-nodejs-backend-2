const mongoose = require('mongoose')
const Joi = require('joi-oid')

const orderSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    order_date:{
        type: Date,
        required: [true, 'Please add date'],
    }
})

/**
 * validating a new order
 * @param {object} obj a new order object to validate
 */
const validateOrder= (obj)=> {
    let schema= Joi.object({
        customer_id: Joi.objectId(),
        order_date: Joi.date().required()
    })
    return schema.validate(obj)
}

const Order = mongoose.model('Order', orderSchema)

module.exports = {
    Order,
    validateOrder
}
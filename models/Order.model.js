const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')

const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    isShipped:{
        type: Boolean,
        required: true,
        default: false
    },
    shippingDate: {
        type: Date,
        required: true
    }
},{
    timestamps: true
})

const validateOrder = (order)=>{
    let schema = Joi.object({
        customerId: Joi.objectId(),
        products: Joi.array().items(Joi.object().keys({
            productId: Joi.objectId(),
            price: Joi.number().required(),
            quantity: Joi.number().required(),
        })),
        totalPrice: Joi.number().required(),
        isShipped: Joi.boolean().required(),
        shippingDate: Joi.date().required(),
    })
    return schema.validate(order)
}

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
module.exports.validateOrder = validateOrder
const mongoose = require('mongoose')
const Joi = require('joi-oid')

const orderDetailsSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    products: {
        type: Array,
        required: true,
    },
    total_price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['new','shipping','delivered'],
        required: true,
    }
})

/**
 * validating a new order details object
 * @param {object} obj a new order details object to validate
 */
const validateOrderDetails= (obj)=> {
    let schema = Joi.object({
        order_id: Joi.objectId(),
        products: Joi.array().items(
            Joi.object({
                product_id: Joi.objectId(),
                unit_price: Joi.number().required(),
                quantity: Joi.number().required().min(1)
            })
        ),
        total_price: Joi.number().required(),
        status: Joi.string().required()
    })

    return schema.validate(obj)
}

const OrderDetails = mongoose.model("OrderDetails", orderDetailsSchema)

module.exports= {
    OrderDetails,
    validateOrderDetails
}
const mongoose = require('mongoose')

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

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
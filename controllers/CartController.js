const Cart = require('../models/Cart');

// add product
exports.addCart=async(req,res)=>{
    try {
           const cart = new Cart({
            customer_id : req.body.customer_id,
            product_id : req.body.product_id,
            product_price : req.body.product_price,
            quantity : req.body.quantity
        })
     let data= await cart.save()
     res.status(201).json({data})   
    } catch (error) {
        console.log(error)
        res.status(404).json({error:error})
}
}

//retrieving carts added.
exports.getCarts=async(req, res) => {
    await Cart.find()
    .then((cart) => res.send(cart).status(201))
    .catch((error) => res.send(error).status(404));
}

// retrieving cart by id
exports.getCartById=async(req, res) => {
    await Cart.findById(req.params.id)
    .then((cart) => res.send(cart).status(201))
    .catch((error) => res.send(error).status(404));
}


//update a cart
exports.updateCart=async(req, res)=>{
    try{
        let newCart = await Cart.findByIdAndUpdate(req.params.id,req.body, {new: true,})
        .then((cart) => res.send(cart).status(201))
        .catch((error) => res.send(error).status(404));
        res.send(newCart)
    } catch(err) {
        console.log(err);
    }
}


//delete a cart
exports.deleteCart=async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id)
        .then((cart) => res.send(cart).status(201))
        .catch((error) => res.send(error).status(404));
}



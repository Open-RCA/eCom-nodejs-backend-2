const {addCart,getCarts,getCartById,updateCart,deleteCart} =require('../controllers/CartController')
const express = require('express');
const router=express.Router()

router.post('/cart/add',addCart)
router.get('/cart/get',getCarts);
router.put('/cart/update/:id',updateCart);
router.delete('/cart/delete/:id',deleteCart);
router.get('/cart/getById/:id', getCartById);

module.exports=router
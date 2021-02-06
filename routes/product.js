const {addProduct,getProducts,getProductById,updateProduct,deleteProduct} = require('../controllers/ProductController')
const express = require('express');
const router=express.Router()

router.post('/product/add',addProduct)
router.get('/product/get',getProducts);
router.put('/product/update/:id',updateProduct);
router.delete('/product/delete/:id',deleteProduct);
router.get('/product/getById/:id', getProductById);

module.exports=router
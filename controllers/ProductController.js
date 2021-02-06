const Product = require('../models/Product');

// add product
exports.addProduct=async(req,res)=>{
    try {
           const product = new Product({
            product_name : req.body.product_name,
            product_category_id : req.body.product_category_id,
            product_price : req.body.product_price,
            product_description : req.body.product_description,
            in_stock : req.body.in_stock
        })
     let data= await product.save()
     res.status(201).json({data})   
    } catch (error) {
        console.log(error)
        res.status(404).json({error:error})
}
}

//retrieving products added.
exports.getProducts=async(req, res) => {
    await Product.find()
    .then((product) => res.send(product).status(201))
    .catch((error) => res.send(error).status(404));
}

// retrieving product by id
exports.getProductById=async(req, res) => {
    await Product.findById(req.params.id)
    .then((product) => res.send(product).status(201))
    .catch((error) => res.send(error).status(404));
}


//update a product
exports.updateProduct=async(req, res)=>{
    try{
        let newProduct = await Product.findByIdAndUpdate(req.params.id,req.body, {new: true,})
        .then((product) => res.send(product).status(201))
        .catch((error) => res.send(error).status(404));
        res.send(newProduct)
    } catch(err) {
        console.log(err);
    }
}


//delete a product
exports.deleteProduct=async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
        .then((product) => res.send(product).status(201))
        .catch((error) => res.send(error).status(404));
}



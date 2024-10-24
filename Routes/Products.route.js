const express = require('express');
const router = express.Router();
const productsController = require('../Controllers/ProductsController.js');

router.route('/products')
      .get(productsController.getProducts)         
      .post(productsController.createProduct);     

router.route('/product/:id')
      .get(productsController.getProduct)       
      .put(productsController.updatedProduct)       
      .delete(productsController.deletedProduct);  

module.exports = router; 

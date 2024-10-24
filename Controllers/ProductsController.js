const Product = require('../Models/Products.model.js');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: `${err.name}\t${err.message}` });
    }
};

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: `${err.name}\t${err.message}` });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body); 
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: `${err.name}\t${err.message}` });
    }
};

const updatedProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: `${err.name}\t${err.message}` });
    }
};

const deletedProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);      
        if (!product) {
            return res.status(404).json({ message: 'Product not found, unable to delete.' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: `${err.name}\t${err.message}` });
    }
};

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updatedProduct,
    deletedProduct
};

const express = require('express');
const Product = require('../../model/allProducts/product');


const addProduct = async (req, res, next) => {
    const product = req.body;
    const result = await Product.create(product);
    res.status(200).json(result);
}

module.exports = addProduct;
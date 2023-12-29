const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    ProductID: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    productCategory: {
        type: String,
        required: true,
    },
})

const Product = model('Product', productSchema);
module.exports = Product;
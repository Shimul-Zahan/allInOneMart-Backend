const express = require('express');
const addProduct = require('../controller/addProducts/addProduct');
const router = express.Router();

router.post('/api/add-product', addProduct);

module.exports = router;
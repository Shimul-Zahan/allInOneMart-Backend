const cors = require('cors')
const express = require('express');

const mainMiddleware = (app) => {
    app.use(cors());
    app.use(express.json());
}

module.exports = mainMiddleware;
const express = require('express');
const app = express();
const cors = require('cors');
const mainMiddleware = require('./middleware/mainMiddleware');
const connectDB = require('./database/connectDB');
const port = process.env.PORT || 5000;
const addProductRoute =require('../src/router/index')

mainMiddleware(app);
app.use(addProductRoute)


app.get('/health', (req, res) => {
    res.send('Server is good');
})

app.all('*', (req, res, next) => {
    const error = new Error(`Invalid url: [${req.url}]`)
    error.status = 404;
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 5000).json({ message: err.message });
})

const finalConnect = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log('E-Mart Ecommerce Db Connect Successfully')
        console.log(`Server running at localhost:${port}`);
    })
}

finalConnect();
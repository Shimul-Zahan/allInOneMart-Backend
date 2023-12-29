const mongoose = require('mongoose');
require('dotenv').config();


const connectURL = () => {
    let connectionURL = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@shimulclaster1.85diumq.mongodb.net/?retryWrites=true&w=majority`;
    return connectionURL;
}

const connectDB = async () => {
    const URL = connectURL();
    await mongoose.connect(URL, { dbName: 'E-MartEcommerceDB' });
}

module.exports = connectDB;
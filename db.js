const mongoose = require('mongoose');
require('dotenv').config();

console.log("MONGODB_URI:", process.env.MONGODB_URI);
console.log("DB_NAME:", process.env.DB_NAME);


mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});
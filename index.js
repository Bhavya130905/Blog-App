const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = 8000;
const authRouter = require('./routes/Auth.js');
require("dotenv").config();
require('./db');

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRouter);
app.get('/', (req, res) => {
    res.json({message: 'The Api is working'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
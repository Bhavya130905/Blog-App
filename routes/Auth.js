const express = require('express');
const router = express.Router();

const User = require('../models/UserScheme.js');

router.get('/', async (req, res) => {
    res.json({ message: 'Users API is working' })
})

module.exports = router;
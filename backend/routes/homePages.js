const express = require('express')
const authenticateToken = require('../middleware/authMiddleware');
const homePages = express.Router()


homePages.get('/dashboard', authenticateToken)

module.exports = homePages
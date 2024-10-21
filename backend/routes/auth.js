const express = require('express')
const { loginUser, registerUser} = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router()

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/dashboard', authenticateToken)

module.exports = router
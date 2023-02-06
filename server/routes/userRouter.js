const router = require('express').Router()
const userConroller = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/auth', authMiddleware, userConroller.check)
router.post('/registration', userConroller.registration)
router.post('/login', userConroller.login)

module.exports = router
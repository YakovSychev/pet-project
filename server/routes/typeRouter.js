const router = require('express').Router()
const typeController = require('../controllers/typeControllers')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/',  typeController.getAll)
router.post('/', checkRole('admin'), typeController.create)

module.exports = router
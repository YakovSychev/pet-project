const router = require('express').Router()
const brandController = require('../controllers/brandControllers')

router.get('/', brandController.getAll)
router.post('/', brandController.create)


module.exports = router
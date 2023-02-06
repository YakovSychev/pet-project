const router = require('express').Router()
const deviceController = require('../controllers/deviceControllers')

router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
router.post('/', deviceController.create)

module.exports = router
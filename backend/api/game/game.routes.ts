const express = require('express')
const gameController = require('./game.controller')
const router = express.Router()

router.get('/', gameController.getCars)
router.post('/', gameController.addCar)
router.put('/:id', gameController.updateCar)

module.exports = router

// export {}
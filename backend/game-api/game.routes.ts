const express = require('express')
const gameController = require('./game.controller.ts')
const router = express.Router()

router.get('/', gameController.getScore)
router.put('/:score', gameController.updateScore)

module.exports = router

// export {}
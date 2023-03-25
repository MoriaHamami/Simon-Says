const gameService = require('./game.service.ts')
const userService = require('../services/user.service.ts')
// const fs = require('fs')
// var scores = require('../data/scores.json')

module.exports = {
  getScore,
  updateScore
}

async function getScore(req, res) {
  console.log('get from back:')
  try {
    // const userId = userService.getUserId()
    const score = await gameService.query(req.query.userId)
    res.status(200).json(score)
  } catch (err) {
    throw err
  }

}
// function get(userId: any) {
//   return scores.find((score: { id: any }) => score.id === userId)
// }

async function updateScore(req, res) {
    console.log('update through back:')
  try {
    // const userId = userService.getUserId()
  // console.log('req.query.userId:', req.query)

    const savedScore = await gameService.save(req.query.userId, req.params.score)
    res.status(200).json(savedScore)
  } catch (err) {
    throw err
  }
}
// function updateScore(userId: string, score: number) {
//   // console.log('userId, score:', userId, score)
//   const userIdx = scores.findIndex((score: { id: string }) => score.id === userId)
//   const user = scores[userIdx]
//   if (user.score > score) return user.score

//   scores[userIdx].score = score
//   _writeScoresToFile()
//   return score
// }








// async function getCars(req, res) {
//   try {
//     const cars = await carService.query()
//     res.json(cars)
//   } catch (err) {
//     logger.error('Failed to get cars', err)
//     res.status(500).send({ err: 'Failed to get cars' })
//   }
// }

// async function addCar(req, res) {

//   try {
//     const car = req.body
//     const addedCar = await carService.add(car)
//     res.json(addedCar)
//   } catch (err) {
//     logger.error('Failed to add car', err)
//     res.status(500).send({ err: 'Failed to add car' })
//   }
// }


// async function updateCar(req, res) {
//   try {
//     const car = req.body
//     const updatedCar = await carService.update(car)
//     res.json(updatedCar)
//   } catch (err) {
//     logger.error('Failed to update car', err)
//     res.status(500).send({ err: 'Failed to update car' })

//   }
// }

// async function removeCar(req, res) {
//   try {
//     const carId = req.params.id
//     const removedId = await carService.remove(carId)
//     res.send(removedId)
//   } catch (err) {
//     logger.error('Failed to remove car', err)
//     res.status(500).send({ err: 'Failed to remove car' })
//   }
// }

// module.exports = {
//   getCars,
//   addCar,
//   updateCar,
// }

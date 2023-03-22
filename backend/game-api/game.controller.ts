const gameService = require('./game.service.js')
// const fs = require('fs')
// var scores = require('../data/scores.json')

async function getScore(req, res) {
  try {
    const scores = await gameService.query()
    res.send(scores)
  } catch (err) {
    throw err
  }

}
// function get(userId: any) {
//   return scores.find((score: { id: any }) => score.id === userId)
// }

async function updateScore(req, res) {
  try {
    const savedScore = await gameService.save(req.query.score)
    res.send(savedScore)
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

// function _writeScoresToFile() {
//   return new Promise((res, rej) => {
//     const data = JSON.stringify(scores, null, 2)
//     fs.writeFile('data/scores.json', data, (err: any) => {
//       if (err) return rej(err)
//       res('')
//     })
//   })
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

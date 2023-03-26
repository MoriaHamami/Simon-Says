const gameService = require('./game.service.ts')

module.exports = {
  getScore,
  updateScore
}

async function getScore(req, res) {
  console.log('get from back:')
  try {
    const score = await gameService.query(req.query.userId)
    res.status(200).json(score)
  } catch (err) {
    throw err
  }

}

async function updateScore(req, res) {
  console.log('update through back:')
  try {
    const savedScore = await gameService.save(req.query.userId, req.params.score)
    res.status(200).json(savedScore)
  } catch (err) {
    throw err
  }
}

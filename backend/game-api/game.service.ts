const fs = require('fs')
var highScore = require('../data/score.json')

module.exports = {
    query,
    save
}

// function query() {
//     return Promise.resolve(highScore)
// }

// function save(updatedScore) {
//     highScore = updatedScore
//     return _writeCarsToFile()
// }

function _writeScoresToFile() {
    return new Promise((res, rej) => {
        const data = JSON.stringify(highScore, null, 2)
        fs.writeFile('data/score.json', data, (err) => {
            if (err) return rej(err)
            res('')
        })
    })
}

function query(userId: any) {
  return highScore.find((score: { id: any }) => score.id === userId)
}

function save(userId: string, score: number) {
  // console.log('userId, score:', userId, score)
  const userIdx = highScore.findIndex((score: { id: string }) => score.id === userId)
  const user = highScore[userIdx]
  if (user.score > score) return user.score

  highScore[userIdx].score = score
  _writeScoresToFile()
  return score
}






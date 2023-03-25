const fs = require('fs')
var highScores = require('../data/highScores.json')

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
        const data = JSON.stringify(highScores, null, 2)
        fs.writeFile('data/highScores.json', data, (err) => {
            if (err) return rej(err)
            res('')
        })
    })
}

function query(userId) {
    console.log('userId:', userId)
    const highScore = highScores?.find(highScore => highScore.id === userId)
    console.log('gameservice: highscore', highScore)
    if (!highScore && highScore !== 0) {
        // If this is the users first game, restart his highscore to 0
        save(userId, 0)
        return 0
    }
    return highScore.score
}

function save(userId, newScore) {
    // console.log('userId, highScore:', userId, highScore)
    const scoreIdx = highScores?.findIndex(highScore => highScore.id === userId)
    console.log('scoreIdx:', scoreIdx)
    // If the user doesnt have a highscore saved
    if (!scoreIdx && scoreIdx !== 0 || scoreIdx === -1) {
        // Save score in hishScores arr
        const highScore = {
            id: userId,
            score: newScore
        }
        console.log('new user:', highScore)
        highScores.push(highScore)
        _writeScoresToFile()
        return newScore
    }

    const highScore = highScores[scoreIdx]
    // If the score isn't higher than the highscore, dont save it
    if (highScore.score > newScore) return highScore.score
    // Update the highscore
    highScores[scoreIdx].score = newScore
    _writeScoresToFile()
    return newScore


}






const fs = require('fs')
var highScore = require('../data/score.json')

module.exports = {
    query,
    save
}

function query() {
    return Promise.resolve(highScore)
}

function save(updatedScore: number) {
    highScore = updatedScore
    return _writeCarsToFile()
}

function _writeCarsToFile() {
    return new Promise((res, rej) => {
        const data = JSON.stringify(highScore, null, 2)
        fs.writeFile('data/score.json', data, (err) => {
            if (err) return rej(err)
            res('')
        })
    })
}





// const dbService = require('../../services/db.service')
// const ObjectId = require('mongodb').ObjectId

// async function query() {
//     try {
//         const collection = await dbService.getCollection('car')
//         var score = await collection.find().toArray()
//         return score
//     } catch (err) {
//         throw err
//     }
// }

// async function add(score: number) {
//     try {
//         const collection = await dbService.getCollection('score')
//         await collection.insertOne(score)
//         return score
//     } catch (err) {
//         throw err
//     }
// }

// async function update(score: number) {
//     try {
//         const scoreToSave = { score }
//         const collection = await dbService.getCollection('score')
//         await collection.updateOne({ _id: ObjectId(score._id) }, { $set: scoreToSave })
//         return score
//     } catch (err) {
//         throw err
//     }
// }

// module.exports = {
//     query,
//     add,
//     update,
// }

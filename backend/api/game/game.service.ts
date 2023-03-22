// const dbService = require('../../services/db.service')
// const ObjectId = require('mongodb').ObjectId

// async function query() {
//     try {
//         const collection = await dbService.getCollection('car')
//         var scores = await collection.find().toArray()
//         return scores
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

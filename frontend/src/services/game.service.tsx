import { utilService } from "./util.service"
import { httpService } from './http.service'

const STORAGE_KEY = 'score'

export const gameService = {
    query,
    save,
    getRandColor,
}

async function query() {
    return httpService.get(STORAGE_KEY)
}

async function save(score: number) {
    try{
        let savedScore
        savedScore = await httpService.post('score', score)
        return savedScore
    } catch(err) {
        throw err
    }
}

function getRandColor() {
    const colors = ['red', 'green', 'yellow', 'blue']
    const colorIdx = utilService.getRandomIntInclusive(0, 3)
    const color = colors[colorIdx]
    return color
}


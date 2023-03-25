import { utilService } from "./util.service"
import { httpService } from './http.service'
import { userService } from "./user.service"

const STORAGE_KEY = 'score'

export const gameService = {
    query,
    save,
    getRandColor,
}

async function query() {
    const userId = userService.getUserId()
    return httpService.get(STORAGE_KEY, {userId})
}

async function save(score: number) {
    try {
        const userId = userService.getUserId()
        // console.log('userId:', userId)
        let savedScore = await httpService.put(`${STORAGE_KEY}/${score}`, {userId})
        return savedScore
    } catch (err) {
        throw err
    }
}

function getRandColor() {
    const colors = ['red', 'green', 'yellow', 'blue']
    const colorIdx = utilService.getRandomIntInclusive(0, 3)
    const color = colors[colorIdx]
    return color
}


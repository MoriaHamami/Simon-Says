import { utilService } from "./util.service"

export const gameService = {
    getRandColor,
}

function startColorSeq() {
    
}



function getRandColor() {
    const colors = ['red', 'green', 'yellow', 'blue']
    const colorIdx = utilService.getRandomIntInclusive(0, 3)
    const color = colors[colorIdx]
    return color
}


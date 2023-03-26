import { useEffect, useState } from 'react'
import { gameService } from '../services/game.service'
import { utilService } from '../services/util.service'
import greenImg from '../assets/imgs/green.png'
import redImg from '../assets/imgs/red.png'
import blueImg from '../assets/imgs/blue.png'
import yellowImg from '../assets/imgs/yellow.png'

const redSoundUrl = require('../assets/audio/redSound.mp3')
const blueSoundUrl = require('../assets/audio/blueSound.mp3')
const greenSoundUrl = require('../assets/audio/greenSound.mp3')
const yellowSoundUrl = require('../assets/audio/yellowSound.mp3')
const loseSoundUrl = require('../assets/audio/loseSound.mp3')

const audioMap: { [key: string]: HTMLAudioElement } = {
    green: new Audio(greenSoundUrl),
    red: new Audio(redSoundUrl),
    yellow: new Audio(yellowSoundUrl),
    blue: new Audio(blueSoundUrl)
}

interface IProps {
    updateScore: (num: number) => void,
    updateHighScore: (num: number) => void
}

function GameBoard({ updateScore, updateHighScore }: IProps) {
    const [markedColor, setMarkedColor] = useState<string>('')
    const [simonSeq, setSimonSeq] = useState<string[]>([])
    const [userSeq, setUserSeq] = useState<string[]>([])
    const [isUserTurn, setIsUserTurn] = useState<boolean>(false)
    // const intervalId = useRef<any>(null)
    // const timeoutId = useRef<any>(null)

    useEffect(() => {
        if (!isUserTurn) playSeq()
    }, [isUserTurn])

    async function playSeq() {
        const nextCorrectColor = gameService.getRandColor()
        simonSeq.push(nextCorrectColor)
        console.log('simonSeq:', simonSeq)
        for (let i = 0; i < simonSeq.length; i++) {
            await utilService.wait(500)
            const currColor = simonSeq[i]
            setMarkedColor(currColor)
            const currSound = audioMap[currColor]
            currSound.play()
            await utilService.wait(500)
            setMarkedColor('')
        }
        setIsUserTurn(true)
    }

    async function colorSelected(selectedColor: string) {
        if (!isUserTurn) return
        userSeq.push(selectedColor)
        const simonsColor = simonSeq[userSeq.length - 1]

        if (selectedColor === simonsColor) {
            await correctUserSeq(simonsColor)
            // If the whole simon seq was correct
            if (userSeq.length === simonSeq.length) {
                userSeqComplete()
            }
        } else {
            wrongUserSeq(simonsColor)
        }
    }

    async function correctUserSeq(selectedColor: string) {
        setMarkedColor(selectedColor)
        const currSound = audioMap[selectedColor]
        currSound.play()
        await utilService.wait(500)
        setMarkedColor('')
    }

    function userSeqComplete() {
        const currScore = simonSeq.length
        // console.log('simonSeq.length:', simonSeq.length)
        updateHighScore(currScore)
        updateScore(1)
        setUserSeq([])
        setIsUserTurn(false)
    }

    async function wrongUserSeq(simonsColor: string) {
        setMarkedColor(simonsColor)
        const currSound = new Audio(loseSoundUrl)
        currSound.play()
        await utilService.wait(500)
        setMarkedColor('')
        // Restart game 
        const currScore = simonSeq.length - 1
        updateHighScore(currScore)
        setIsUserTurn(false)
        setUserSeq([])
        setSimonSeq([])
        updateScore(0)

        // show modal later
    }

    function getClassName(color: string) {
        if (color === markedColor) return `highlight ${color}-btn`
        else return `${color}-btn`
    }

    return (
        <div className="game-board">
            <button className={getClassName('blue')} onClick={() => colorSelected('blue')}><img src={blueImg} alt='green' /></button>
            <button className={getClassName('green')} onClick={() => colorSelected('green')}><img src={greenImg} alt='green' /></button>
            <button className={getClassName('red')} onClick={() => colorSelected('red')}><img src={redImg} alt='green' /></button>
            <button className={getClassName('yellow')} onClick={() => colorSelected('yellow')}><img src={yellowImg} alt='green' /></button>
        </div>
    )

}

export default GameBoard
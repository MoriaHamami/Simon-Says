import { useEffect, useState, useRef } from 'react'
import { gameService } from '../services/game.service'
import { utilService } from '../services/util.service'

function GameBoard() {
    const [markedColor, setMarkedColor] = useState<string>('')
    const [simonSeq, setSimonSeq] = useState<string[]>([])
    const [userSeq, setUserSeq] = useState<string[]>([])
    const [isUserTurn, setIsUserTurn] = useState<boolean>(false)
    const intervalId = useRef<any>(null)
    const timeoutId = useRef<any>(null)
    // simonSeq
    // userSeq
    // isSeqPlaying
    // userStack
    // currColor

    useEffect(() => {
        if (!isUserTurn) playSeq()
    }, [isUserTurn])

    // const seqStack = []
    // colorToSelect
    // seqStack.push(color)
    // setColorToSelect(color)
    // currColor 
    async function playSeq() {
        const nextCorrectColor = gameService.getRandColor()
        simonSeq.push(nextCorrectColor)
        // setSimonSeq(prevSeq => prevSeq ? [...prevSeq, nextCorrectColor] : [nextCorrectColor])
        for (let i = 0; i < simonSeq.length; i++) {
            await utilService.wait(500)

            // let i = 0
            // setMarkedColor(simonSeq[i])
            // i++
            // intervalId.current = setInterval(() => {
            setMarkedColor(simonSeq[i])
            // i++
            await utilService.wait(1000)
            // If this is the last color in seq
            // if (i >= simonSeq.length) {
            //     timeoutId.current = setTimeout(() => {
            //         clearInterval(intervalId.current)
            setMarkedColor('')
            // setIsUserTurn(true)
            // clearTimeout(timeoutId.current)
            // }, 2000)
        }
        // }, 2000)
        setIsUserTurn(true)
        // }


    }

    async function colorSelected(selectedColor: string) {
        if (!isUserTurn) return
        userSeq.push(selectedColor)
        // setUserSeq(prevSeq => prevSeq ? [...prevSeq, selectedColor] : [selectedColor])
        // simonSeq.push(selectedColor)
        const simonsColor = simonSeq[userSeq.length - 1]

        setMarkedColor(simonsColor)
        await utilService.wait(500)
        setMarkedColor('')

        if (selectedColor === simonsColor) {
            // If the whole simon seq was correct
            if (userSeq.length === simonSeq.length) {
                setUserSeq([])
                setIsUserTurn(false)
                // playSeq()
            }
        } else {


            // If the user is incorrect, the game restarts
            setIsUserTurn(false)
            setUserSeq([])
            setSimonSeq([])
            // show modal later
            // playSeq()
        }
    }

    function getClassName(color: string) {
        if (color === markedColor) return `highlight ${color}-btn`
        else return `${color}-btn`
    }

    // function setMarkedColorWTime(color: string) {
    //     setMarkedColor(color)
    //     timeoutId.current = setTimeout(() => {
    //         setMarkedColor('')
    //         clearTimeout(timeoutId.current)
    //     }, 2000)
    // }

    return (
        <div className="game-board">
            {/* {'marked:' + markedColor} */}
            <button className={getClassName('green')} onClick={() => colorSelected('green')}>Green</button>
            <button className={getClassName('red')} onClick={() => colorSelected('red')}>Red</button>
            <button className={getClassName('blue')} onClick={() => colorSelected('blue')}>Blue</button>
            <button className={getClassName('yellow')} onClick={() => colorSelected('yellow')}>Yellow</button>
            {'simonSeq:' + JSON.stringify(simonSeq)}
        </div>
    )

}

export default GameBoard
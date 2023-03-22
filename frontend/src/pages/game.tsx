import { useState } from 'react'
// import { simonSaysService } from '../services/simonsays.service'

import GameBoard from '../cmps/game-board'
import Modal from '../cmps/modal'
import { gameService } from '../services/game.service'
// import LostModal from '../cmps/LostModal'
// import InstructionsModal from '../cmps/InstructionsModal'
// import UtilityButtons from '../cmps/UtilityButtons'

// export interface IState {
//     gameState: {
//         isPlaying: boolean
//         isLost: boolean
//         score: number
//     }
// }

function Game() {
    const [isModalShown, setIsModalShown] = useState<boolean>(false)
    const [highScore, setHighScore] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    // const [isInstructionsOpen, setIsInstructionsOpen] = useState<Boolean>(true)
    // const [gameState, setGameState] = useState<IState['gameState']>({ isPlaying: false, isLost: false, score: 0 })

    // useEffect(() => {
    //     getHighScore()
    // }, [])

    // async function getHighScore() {
    //     try {
    //         const highScore = await simonSaysService.getHighScore()
    //         setHighScore(highScore)
    //     } catch (err) {
    //         console.error('Problem with GETting high score from the server', err)
    //     }
    // }
    // async function updateHighScore() {
    //     try {
    //         const highScore = await simonSaysService.updateHighScore(gameState.score)
    //         setHighScore(highScore)
    //     } catch (err) {
    //         console.error('Problem with POSTing high score to the server', err)
    //     }
    // }

    // function onLose() {
    //     updateHighScore()
    //     setGameState(prevGameState => ({ ...prevGameState, isPlaying: false, isLost: true }))
    // }

    // function onStart() {
    //     setGameState({ score: 0, isLost: false, isPlaying: true })
    // }

    // function onExitInstructions() {
    //     setIsInstructionsOpen(false)
    //     // if already playing (clicked on info)
    //     if (gameState.isPlaying) return

    //     onStart()
    // }

    // function onInstructions() {
    //     setIsInstructionsOpen(true)
    // }

    // async function onRestart() {
    //     setGameState({ score: 0, isLost: false, isPlaying: true })
    // }


    function updateScore(num: number) {
        switch (num) {
            case 1:
                setScore(prevScore=> prevScore+1)
                break;
            case 0:
                setScore(0)
                break;
        }
    }


    // function onGameStart() {
    //     gameService.startColorSeq()
    // }

    return <div className='simon-says'>
        <span>Score: {score}</span>
        <span>High Score: {highScore}</span>
        <button>Restart</button>
        <GameBoard updateScore={updateScore} />
        {isModalShown && <Modal setIsModalShown={setIsModalShown} />}
        {/* <p className='high-score'>High Score: {highScore}</p>
            {isInstructionsOpen && <InstructionsModal onExitInstructions={onExitInstructions} />}
            <GameBoard gameState={gameState} setGameState={setGameState} onLose={onLose} />
            {gameState.isLost && <LostModal score={gameState.score} onStart={onStart} />}
            <UtilityButtons onInstructions={onInstructions} onRestart={onRestart} /> */}
    </div>

}

export default Game
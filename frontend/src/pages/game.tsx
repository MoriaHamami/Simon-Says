import { useState, useEffect } from 'react'
// import { simonSaysService } from '../services/simonsays.service'

import GameBoard from '../cmps/game-board'
import Modal from '../cmps/modal'
import { gameService } from '../services/game.service'

function Game() {
    const [isModalShown, setIsModalShown] = useState<boolean>(false)
    const [highScore, setHighScore] = useState<number>(0)
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        getHighScore()
    }, [])

    async function getHighScore() {
        const highScore = await gameService.query()
        setHighScore(highScore)
    }

    async function updateHighScore(score: number) {
        const highScore =  await gameService.save(score)
        setHighScore(highScore)
    }

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
        <GameBoard updateScore={updateScore} updateHighScore={updateHighScore}/>
        {isModalShown && <Modal setIsModalShown={setIsModalShown} />}
        {/* <p className='high-score'>High Score: {highScore}</p>
            {isInstructionsOpen && <InstructionsModal onExitInstructions={onExitInstructions} />}
            <GameBoard gameState={gameState} setGameState={setGameState} onLose={onLose} />
            {gameState.isLost && <LostModal score={gameState.score} onStart={onStart} />}
            <UtilityButtons onInstructions={onInstructions} onRestart={onRestart} /> */}
    </div>

}

export default Game
import {useState} from 'react'

function GameBoard() {

    const [isSeqPlaying, setIsSeqPlaying] = useState<boolean>(true)

    // isSeqPlaying
    // seqStack
    // currColor


    // const seqStack = []
// colorToSelect
// seqStack.push(color)
// setColorToSelect(color)
// currColor 
function colorSelected(color: string){
    if(isSeqPlaying) return
    
}

    return (
        <div className="game-board">
            <button>Green</button>
            <button>Red</button>
            <button>Blue</button>
            <button>Yellow</button>
        </div>
    )

}

export default GameBoard
import { useState } from "react"
import { DndProvider } from "react-dnd"
import { TouchBackend } from "react-dnd-touch-backend"
import Cell from "../cell/Cell"
import "./Board.scss"
// import bB from "../pieces/bB.svg"

function Board() {
  const [boardState, setBoardState] = useState(["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR", "bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP", "wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"])
  return (
    <div className="board">
      <DndProvider backend={TouchBackend}>
        {Array.from(Array(8)).map((_, row) =>
          Array.from(Array(8)).map((_, column) => <Cell key={"cell" + row + column} row={row} column={column} piece={boardState[row * 8 + column]} />)
        )}
      </DndProvider>
    </div>
  )
}

export default Board
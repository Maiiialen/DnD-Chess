import { useState } from "react"
import { DndProvider } from "react-dnd"
import { TouchBackend } from "react-dnd-touch-backend"
import useBoardStore from "../../store/Store"
import Cell from "../cell/Cell"
import "./Board.scss"

function movePiece(name: string, row: number, column: number){
    console.log("heree!", row, column);
    return null
}

function Board() {
    const pieces = useBoardStore((state) => state.pieces)
  const [boardState, setBoardState] = useState(["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR", "bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP", "wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"])
  return (
    <div className="board">
      <DndProvider backend={TouchBackend}>
        {Array.from(Array(8)).map((_, row) =>
          Array.from(Array(8)).map((_, column) => {
            {
              const newPiece = pieces.find((piece, idx) => piece.row === row && piece.column === column)
              if(newPiece !== undefined) {
                return <Cell key={"cell" + row*column} piece={newPiece} />
              } else {
                return <Cell key={"cell" + row*column} piece={{name:"", row:row, column:column, type:undefined}} />
              }
            }
          })
        )}
      </DndProvider>
    </div>
  )
}

export default Board
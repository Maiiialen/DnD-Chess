import { DndProvider } from "react-dnd"
import { TouchBackend } from "react-dnd-touch-backend"
import Cell from "../cell/Cell"
import "./Board.scss"

function Board() {

  return (
    <div className="board">
      <DndProvider backend={TouchBackend}>
        {Array.from(Array(8)).map((_, row) =>
          Array.from(Array(8)).map((_, column) => <Cell key={"cell" + row * 8 + column} row={row} column={column} />
          )
        )}
      </DndProvider>
    </div>
  )
}

export default Board
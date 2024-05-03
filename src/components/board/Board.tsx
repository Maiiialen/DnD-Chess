import Cell from "../cell/Cell"
import "./Board.scss"

function Board() {

  return (
    <div className="board">
        {Array.from(Array(8)).map((_, row) =>
          Array.from(Array(8)).map((_, column) =>
            <Cell key={"cell" + row * 8 + column} row={row} column={column} />
          )
        )}
    </div>
  )
}

export default Board

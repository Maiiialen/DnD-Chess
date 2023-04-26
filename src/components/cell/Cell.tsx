import Piece from "../piece/Piece"
import "./Cell.scss"

function Cell({ row, column, piece }: { row: number, column: number, piece: string }) {
  const labels = ["a", "b", "c", "d", "e", "f", "g", "h"]

  // useDrop here

  return (
    <div className="cell" style={{
      backgroundColor: row % 2
        ? (row * 8 + column) % 2 ? "#D58F64" : "#7F3300"
        : (row * 8 + column) % 2 ? "#7F3300" : "#D58F64",
      color: row % 2
        ? (row * 8 + column) % 2 ? "#7F3300" : "#D58F64"
        : (row * 8 + column) % 2 ? "#D58F64" : "#7F3300"
    }}>
      {row === 7 && <div id="row">{labels[column]}</div>}
      {column === 7 && <div id="column">{8 - row}</div>}
      <Piece name={piece} />
    </div>
  )
}

export default Cell
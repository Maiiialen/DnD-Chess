import type { FC } from 'react'
import { useDrop } from "react-dnd"
import Piece from "../piece/Piece"
import "./Cell.scss"
import { ItemTypes } from "../properties/ItemTypes"
import { CellProps } from "../properties/interfaces"

const Cell: FC<CellProps> = ({ piece }) => {
  const labels = ["a", "b", "c", "d", "e", "f", "g", "h"]

  function movePiece(name: string, row: number, column: number) {
    console.log("heree!", row, column);
    return null
  }

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.KNIGHT,
    canDrop: () => { return true },
    drop: () => movePiece(piece.name, piece.row, piece.column),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }))

  return (
    <div className="cell" ref={drop} style={{
      backgroundColor: piece.row % 2
        ? (piece.row * 8 + piece.column) % 2 ? "#D58F64" : "#7F3300"
        : (piece.row * 8 + piece.column) % 2 ? "#7F3300" : "#D58F64",
      color: piece.row % 2
        ? (piece.row * 8 + piece.column) % 2 ? "#7F3300" : "#D58F64"
        : (piece.row * 8 + piece.column) % 2 ? "#D58F64" : "#7F3300"
    }}>
      {piece.row === 7 && <div id="row">{labels[piece.column]}</div>}
      {piece.column === 7 && <div id="column">{8 - piece.row}</div>}
      <Piece name={piece.name} />
    </div>
  )
}

export default Cell
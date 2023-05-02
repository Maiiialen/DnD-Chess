import type { FC } from 'react'
import { useDrop } from "react-dnd"
import Piece from "../piece/Piece"
import { PieceType } from '../properties/interfaces'
import "./Cell.scss"
import { ItemTypes } from "../properties/ItemTypes"
import { CellProps } from "../properties/interfaces"
import useBoardStore from '../../store/Store'


function canDropPiece(type: string | undefined, row: number, column: number) {
  return true
}

const Cell: FC<CellProps> = ({ row, column }) => {
  const labels = ["a", "b", "c", "d", "e", "f", "g", "h"]
  const ownPiece = useBoardStore((state) => state.pieces.find((piece) => piece.row === row && piece.column === column))

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.KNIGHT,
    canDrop(piece: PieceType) { return ownPiece === undefined && canDropPiece(piece.type, row, column) },
    drop(piece: PieceType) { useBoardStore.getState().movePiece(piece, row, column) },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div className="cell" ref={drop} style={{
      backgroundColor: row % 2
        ? (row * 8 + column) % 2 ? "#D58F64" : "#7F3300"
        : (row * 8 + column) % 2 ? "#7F3300" : "#D58F64",
      color: row % 2
        ? (row * 8 + column) % 2 ? "#7F3300" : "#D58F64"
        : (row * 8 + column) % 2 ? "#D58F64" : "#7F3300"
    }}>
      {row === 7 && <div id="row">{labels[column]}</div>}
      {column === 7 && <div id="column">{8 - row}</div>}
      {ownPiece && <Piece row={ownPiece?.row} column={ownPiece?.column} name={ownPiece?.name} type={ownPiece?.type} />}
    </div>
  )
}

export default Cell
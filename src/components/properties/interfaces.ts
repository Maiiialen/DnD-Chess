import { ItemTypes } from "./ItemTypes";

export interface PieceType {
  row: number,
  column: number,
  name: string,
  type: string,
}


export interface CellProps {
  row: number,
  column: number,
}

export const canDropPiece = (piece: PieceType, row: number, column: number) => {
  switch (piece.type) {
    case ItemTypes.PAWN:
      return true
    case ItemTypes.ROOK:
      return piece.row === row && piece.column !== column || piece.row !== row && piece.column === column// && nothing on way
    case ItemTypes.KNIGHT:
      return true
    case ItemTypes.BISHOP:
      return true
    case ItemTypes.QUEEN:
      return true
    case ItemTypes.KING:
      return true
  }
  return false
}
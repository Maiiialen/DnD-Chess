import { PieceType } from "../components/properties/interfaces"

export interface BoardStore {
  pieces: PieceType[],
  movePiece: (piece: PieceType, row: number, column: number) => void,
  beatPiece: () => null,
}
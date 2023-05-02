import { PieceType } from "../components/properties/interfaces"

export interface BoardStore {
  pieces: PieceType[],
  images: {
    bB: string,
    bK: string,
    bN: string,
    bP: string,
    bQ: string,
    bR: string,
    wB: string,
    wK: string,
    wN: string,
    wP: string,
    wQ: string,
    wR: string,
  }
  movePiece: (piece: PieceType, row: number, column: number) => void,
  beatPiece: () => null,
}
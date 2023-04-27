import { Piece } from "../components/properties/interfaces"

export interface BoardStore {
  pieces: Piece[],
  movePiece: () => null,
  beatPiece: () => null,
}
import { PieceType } from "../components/properties/interfaces"

export interface BoardStore {
  pieces: PieceType[],
  images: {
    [key: string]:string,
  },
  turn: boolean;
  nextTurn: () => void;
  movePiece: (piece: PieceType, row: number, column: number) => void,
  beatPiece: () => null,
}
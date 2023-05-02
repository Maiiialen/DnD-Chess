import { create } from 'zustand'
import { devtools } from "zustand/middleware"
import { BoardStore } from './interface'

const useBoardStore = create<BoardStore>()(
  devtools((set, get) => ({
    pieces: [
      {
        row: 0,
        column: 0,
        name: "bR",
        type: "ROOK"
      },
      {
        row: 0,
        column: 1,
        name: "bN",
        type: "KNIGHT"
      },
      {
        row: 0,
        column: 2,
        name: "bB",
        type: "BISHOP"
      },
      {
        row: 0,
        column: 3,
        name: "bQ",
        type: "QUEEN"
      },
      {
        row: 0,
        column: 4,
        name: "bK",
        type: "KING"
      },
      {
        row: 0,
        column: 5,
        name: "bB",
        type: "BISHOP"
      },
      {
        row: 0,
        column: 6,
        name: "bN",
        type: "KNIGHT"
      },
      {
        row: 0,
        column: 7,
        name: "bR",
        type: "ROOK"
      },
      {
        row: 1,
        column: 0,
        name: "bP",
        type: "PAWN"
      },
      {
        row: 1,
        column: 1,
        name: "bP",
        type: "PAWN"
      },
      {
        row: 1,
        column: 2,
        name: "bP",
        type: "PAWN"
      },
      {
        row: 1,
        column: 3,
        name: "bP",
        type: "PAWN"
      },
      {
        row: 1,
        column: 4,
        name: "bP",
        type: "PAWN"
      },
      {
        row: 1,
        column: 5,
        name: "bP",
        type: "PAWN"
      },
      {
        row: 1,
        column: 6,
        name: "bP",
        type: "PAWN"
      },
      {
        row: 1,
        column: 7,
        name: "bP",
        type: "PAWN"
      },
      {
        row: 6,
        column: 0,
        name: "wP",
        type: "PAWN"
      },
      {
        row: 6,
        column: 1,
        name: "wP",
        type: "PAWN"
      },
      {
        row: 6,
        column: 2,
        name: "wP",
        type: "PAWN"
      },
      {
        row: 6,
        column: 3,
        name: "wP",
        type: "PAWN"
      },
      {
        row: 6,
        column: 4,
        name: "wP",
        type: "PAWN"
      },
      {
        row: 6,
        column: 5,
        name: "wP",
        type: "PAWN"
      },
      {
        row: 6,
        column: 6,
        name: "wP",
        type: "PAWN"
      },
      {
        row: 6,
        column: 7,
        name: "wP",
        type: "PAWN"
      },
      {
        row: 7,
        column: 0,
        name: "wR",
        type: "ROOK"
      },
      {
        row: 7,
        column: 1,
        name: "wN",
        type: "KNIGHT"
      },
      {
        row: 7,
        column: 2,
        name: "wB",
        type: "BISHOP"
      },
      {
        row: 7,
        column: 3,
        name: "wQ",
        type: "QUEEN"
      },
      {
        row: 7,
        column: 4,
        name: "wK",
        type: "KING"
      },
      {
        row: 7,
        column: 5,
        name: "wB",
        type: "BISHOP"
      },
      {
        row: 7,
        column: 6,
        name: "wN",
        type: "KNIGHT"
      },
      {
        row: 7,
        column: 7,
        name: "wR",
        type: "ROOK"
      },
    ],
    movePiece: (piece, row, column) => {
      const newPieces = get().pieces
      const foundedPiece = newPieces.find((checkPiece) => piece.row === checkPiece.row && piece.column === checkPiece.column)
      if (foundedPiece) {
        foundedPiece.row = row
        foundedPiece.column = column
      }
      set(() => ({
        pieces: newPieces
      }))
    },
    beatPiece: () => null,
  }))
)

export default useBoardStore
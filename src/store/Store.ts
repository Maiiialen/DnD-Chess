import { create } from 'zustand'
import { devtools } from "zustand/middleware"
import { BoardStore } from './interface'

const useBoardStore = create<BoardStore>()(
  devtools((set, get) => ({
    pieces: [
      {
        row: 0,
        column: 2,
        name: "bB",
        type: "bishop"
      }
    ],
    movePiece: () => null,
    beatPiece: () => null,
  }))
)

export default useBoardStore
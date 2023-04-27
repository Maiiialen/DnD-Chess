export interface Piece {
    row: number,
    column: number,
    name: string,
    type: string | undefined,
}

export interface PieceProps {
    name: string,
}

export interface CellProps {
    piece: Piece,
}
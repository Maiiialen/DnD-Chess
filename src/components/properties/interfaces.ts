export interface PieceProps {
    name: string;
}

export interface CellProps {
    row: number,
    column: number,
    piece: string,
    movePiece: (name: string, row: number, column: number) => null,
}
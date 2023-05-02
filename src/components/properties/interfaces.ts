export interface PieceType {
    row: number,
    column: number,
    name: string,
    type: string | undefined,
}


export interface CellProps {
    row: number,
    column: number,
}
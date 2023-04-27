import type { FC } from 'react'
import { useDrop } from "react-dnd"
import Piece from "../piece/Piece"
import "./Cell.scss"
import { ItemTypes } from "../properties/ItemTypes"
import { CellProps } from "../properties/interfaces"

const Cell: FC<CellProps> = ({ row, column, piece, movePiece }) => {
    const labels = ["a", "b", "c", "d", "e", "f", "g", "h"]

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.KNIGHT,
        canDrop: () => { return true },
        drop: () => movePiece(piece, row, column),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }))

    return (
        <div className="cell" ref={drop} style={{
            backgroundColor: row % 2
                ? (row * 8 + column) % 2 ? "#D58F64" : "#7F3300"
                : (row * 8 + column) % 2 ? "#7F3300" : "#D58F64",
            color: row % 2
                ? (row * 8 + column) % 2 ? "#7F3300" : "#D58F64"
                : (row * 8 + column) % 2 ? "#D58F64" : "#7F3300"
        }}>
            {row === 7 && <div id="row">{labels[column]}</div>}
            {column === 7 && <div id="column">{8 - row}</div>}
            <Piece name={piece} />
        </div>
    )
}

export default Cell
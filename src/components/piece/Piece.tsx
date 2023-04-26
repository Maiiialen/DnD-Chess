import type { CSSProperties, FC } from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ItemTypes } from '../properties/ItemTypes'
import { PieceProps } from "../properties/interfaces"
import "./Piece.scss";

const knightStyle: CSSProperties = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
}

const Piece: FC<PieceProps> = function Box({ name }: { name: string }) {
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: ItemTypes.KNIGHT,
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }),
        [],
    )

    if (name === "") return <div></div>;
    return (
        <>
            <DragPreviewImage connect={preview} src={`../pieces/${name}.svg`} />
            <div className="dragable" ref={drag}
                style={{
                    ...knightStyle,
                    opacity: isDragging ? 0.5 : 1,
                }}>
                <img src={`../pieces/${name}.svg`} alt={name} />
            </div>
        </>
    )
}

export default Piece


// useDrag here
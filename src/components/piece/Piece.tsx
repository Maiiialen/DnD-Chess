import type { CSSProperties, FC } from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ItemTypes } from '../properties/ItemTypes'
import { PieceType } from "../properties/interfaces"
import "./Piece.scss";

const knightStyle: CSSProperties = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
}

const Piece: FC<PieceType> = ({ row, column, name, type }) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: type,
      item: { row, column, name, type },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  )

  if (name === undefined) return <div></div>;
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
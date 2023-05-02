import type { CSSProperties, FC } from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ItemTypes } from '../properties/ItemTypes'
import { PieceType } from "../properties/interfaces"
import useBoardStore from '../../store/Store'
import "./Piece.scss";

const knightStyle: CSSProperties = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
}

const Piece: FC<PieceType> = ({ row, column, name, type }) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.KNIGHT,
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
      {/* <DragPreviewImage connect={preview} src={new URL(`../pieces/${name}.svg`, import.meta.url).href} /> */}
      <div className="dragable" ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}>
        <img src={`data:image/svg+xml;base64,${useBoardStore.getState().images[name]}`} alt={name} />
      </div>
    </>
  )
}

export default Piece
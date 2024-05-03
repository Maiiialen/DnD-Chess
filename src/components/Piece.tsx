import type { CSSProperties, FC } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './properties/utils'
import { PieceType } from "./properties/interfaces"
import useBoardStore from '../store/Store'

const Piece: FC<PieceType> = ({ row, column, name, type }) => {
  const [{ isDragging }, drag] = useDrag(
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
      <div className="h-full w-full flex items-center justify-center" ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}>
        <img className='h-[80%] w-[80%]' src={`data:image/svg+xml;base64,${useBoardStore.getState().images[name]}`} alt={name} />
      </div>
    </>
  )
}

export default Piece
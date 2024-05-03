import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import Board from "../components/Board";
import Informations from "../components/Informations";
import Settings from "../components/Settings";
import BoardDragLayer from "../components/BoardDragLayer";

function Page() {
  return (
    <>
      <div className="bg-matterhorn flex h-10 w-full items-center">Themes</div>
      <div className="bg-darkgray small:grid-cols-1 middle:grid-cols-[3fr,1fr] middle:grid-rows-[2fr,3fr] small:grid-rows-[3fr,1fr,1fr] small:justify-items-center  grid h-[calc(100vh-40px)] grid-cols-[1fr,min(80vh,80vw),1fr] grid-rows-1 items-center justify-between gap-5 overflow-x-hidden p-5">
        <Settings />
        <div className="small:row-span-full middle:row-span-full middle: small:h-[min(90vh,90vw)] middle:h-[min(80vh,80vw)] aspect-square h-[min(80vh,80vw)] w-auto justify-self-center">
          <DndProvider
            backend={TouchBackend}
            options={{
              enableMouseEvents: true,
              delayTouchStart: 100,
              enableHoverOutsideTarget: false,
              ignoreContextMenu: true,
            }}
          >
            <Board />
            <BoardDragLayer />
          </DndProvider>
        </div>
        <Informations />
      </div>
    </>
  );
}

export default Page;

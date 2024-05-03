import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import Board from "../components/board/Board";
import Informations from "../components/informations/Informations";
import Settings from "../components/settings/Settings";
import BoardDragLayer from "../components/board-drag-layer/BoardDragLayer";
import "./App.scss";

function App() {
  return (
    <div className="page">
      <div className="header">Themes</div>
      <div className="main">
        <Settings />
        <div className="outer-board">
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
    </div>
  );
}

export default App;

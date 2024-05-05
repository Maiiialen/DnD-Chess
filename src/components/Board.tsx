import Cell from "./Cell";

function Board() {
  return (
    <div className="grid h-full w-full grid-cols-8 grid-rows-8">
      {Array.from(Array(8)).map((_, row) =>
        Array.from(Array(8)).map((_, column) => (
          <Cell key={"cell" + row * 8 + column} row={row} column={column} />
        )),
      )}
    </div>
  );
}

export default Board;

import { useState } from "react";

function Square() {
  return (
    <button className="border border-gray-400 float-left text-lg font-bold text-center -mr-[1px] -mb-[1px] w-9 h-9">
      X
    </button>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Board />
    </>
  );
}

export default App;

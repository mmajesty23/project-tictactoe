import "./App.css";

function Square() {
  return <div className="border border-black px-6 py-6 inline-block"></div>;
}

function Board() {
  return (
    <div className="max-w-max mx-auto">
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div className="-mt-[7px]">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="-mt-[7px]">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Board />
    </div>
  );
}

export default App;

import { useState } from "react";

const App = () => {
  const [color, updateColor] = useState("white");
  return (
    <div
      className="h-screen w-screen font-semibold text-xl bg-red-500"
      style={{ background: color }}
    >
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 h-fit w-fit flex gap-2 p-2.5 bg-black rounded-full">
        <button
          type="button"
          className="py-2 px-4 bg-red-500 rounded-full"
          onClick={() =>
            updateColor((prev) => (prev === "red" ? "black" : "red"))
          }
        >
          Red
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-blue-500 rounded-full"
          onClick={() =>
            updateColor((prev) => (prev === "blue" ? "black" : "blue"))
          }
        >
          Blue
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-green-500 rounded-full"
          onClick={() =>
            updateColor((prev) => (prev === "green" ? "black" : "green"))
          }
        >
          Green
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-purple-500 rounded-full"
          onClick={() =>
            updateColor((prev) => (prev === "purple" ? "black" : "purple"))
          }
        >
          Purple
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-cyan-500 rounded-full"
          onClick={() =>
            updateColor((prev) => (prev === "cyan" ? "black" : "cyan"))
          }
        >
          Cyan
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-orange-500 rounded-full"
          onClick={() =>
            updateColor((prev) => (prev === "orange" ? "black" : "orange"))
          }
        >
          Orange
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-violet-500 rounded-full"
          onClick={() =>
            updateColor((prev) => (prev === "violet" ? "black" : "violet"))
          }
        >
          Violet
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-gray-500 rounded-full"
          onClick={() =>
            updateColor((prev) => (prev === "gray" ? "black" : "gray"))
          }
        >
          Gray
        </button>
      </div>
    </div>
  );
};

export default App;

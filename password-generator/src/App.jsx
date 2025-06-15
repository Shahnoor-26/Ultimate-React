import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, updateLength] = useState(5);
  const [password, updatePassword] = useState("");
  const [uppercase, updateCase] = useState(false);
  const [symbols, updateSymbol] = useState(false);
  const [number, updateNumber] = useState(false);

  const codeId = useRef(null);

  const generator = useCallback(() => {
    let code = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (symbols) str += "$#@-_.";

    for (let index = 0; index < length; index++) {
      const index = Math.floor(Math.random() * str.length + 1);
      code += str.charAt(index);
    }

    updatePassword(code);
  }, [length, symbols, number, uppercase, updatePassword]);

  useEffect(() => {
    generator();
  }, [number, symbols, length, uppercase, generator]);

  const codeSelector = useCallback(() => {
    codeId.current.select();
    codeId.current.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="h-screen w-full font-semibold text-lg bg-black  select-none">
      <h1 className="text-4xl text-center p-4 bg-slate-800 text-white">
        Password Generator
      </h1>
      <div className="h-fit w-1/2 bg-slate-800 mx-auto my-10  p-4 rounded-xl flex flex-wrap justify-center items-center gap-4">
        <div className="h-12 w-full flex ">
          <input
            type="text"
            placeholder="password"
            value={password}
            ref={codeId}
            className="h-full w-full bg-white rounded-l-md px-2.5 outline-none border-y-2 border-l-2 border-blue-600"
            readOnly
          />
          <button
            type="button"
            className="min-h-full min-w-fit px-4 py-2 bg-blue-600 rounded-r-md text-white  cursor-pointer"
            onClick={codeSelector}
          >
            Copy
          </button>
        </div>
        <div className="h-full w-full flex items-center justify-evenly  text-orange-500 ">
          <span className="flex items-center justify-center gap-2 ">
            <input
              type="range"
              id="count"
              value={length}
              min={5}
              max={100}
              onChange={(e) => updateLength(e.target.value)}
            />
            <label htmlFor="count">Length = {length}</label>
          </span>
          <span className="flex items-center justify-center gap-2 ">
            <input
              type="checkbox"
              id="numbers"
              onChange={() => {
                updateNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numbers">Numbers</label>
          </span>
          <span className="flex items-center justify-center gap-2 ">
            <input
              type="checkbox"
              id="symbols"
              onChange={() => {
                updateSymbol((prev) => !prev);
              }}
            />
            <label htmlFor="symbols">Symbols</label>
          </span>
          <span className="flex items-center justify-center gap-2 ">
            <input
              type="checkbox"
              id="capitalize"
              onChange={() => {
                updateCase((prev) => !prev);
              }}
            />
            <label htmlFor="capitalize">Capitalize</label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;

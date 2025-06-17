import React from "react";

const InputBox = () => {
  return (
    <div className="h-auto w-full flex gap-2 text-lg">
      <div className="h-auto w-1/2 p-2 flex flex-col border-2 border-slate-200 rounded-md shadow shadow-black">
        <label htmlFor="" className="p-2 text-xl">
          Amount
        </label>
        <input
          type="number"
          placeholder="Enter here"
          className="h-auto w-full p-2"
        />
      </div>
      <div className="h-auto w-1/2 p-2 flex flex-col border-2 border-slate-200 rounded-md shadow shadow-black">
        <label htmlFor="" className="p-2 text-xl">
          Currency Type
        </label>
        <select className="h-auto w-full p-2">
          <option value="usd">USD</option>
        </select>
      </div>
    </div>
  );
};

export default InputBox;

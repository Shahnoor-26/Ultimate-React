import React from "react";
import InputBox from "./components/InputBox";

const App = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-cover bg-no-repeat bg-[url('./assets/wallpaper.webp')] text-white font-semibold antialiased">
      <section className="h-3/4 w-1/2 p-4 backdrop-blur-xs border-2 border-slate-200 rounded-md shadow shadow-black">
        <form
          action=""
          className="h-full w-full flex flex-col items-center justify-evenly"
        >
          <InputBox />
          <button
            type="button"
            className="px-4 py-2 border-2 border-slate-200 rounded-md shadow shadow-black text-xl truncate transition-all duration-300 ease-in-out hover:scale-105"
          >
            Swap Currency
          </button>
          <InputBox />
          <button
            type="submit"
            className="px-4 py-2 border-2 border-slate-200 rounded-md shadow shadow-black text-xl truncate transition-all duration-300 ease-in-out hover:scale-105"
          >
            Convert USD Into INR
          </button>
        </form>
      </section>
    </main>
  );
};

export default App;

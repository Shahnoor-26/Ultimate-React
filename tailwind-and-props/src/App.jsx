import React from "react";
import Card from "./components/Card";

const App = () => {
  let props = "Properties";
  let object = {
    id: "#123",
    password: "Props",
  };
  let array = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-4xl text-center m-4 p-4 bg-cyan-800 border-2 text-white rounded-xl">
        Tailwind & Props
      </h1>
      <div className="flex">
        <Card subject="Sober Mark" price={Math.floor(Math.random() * 100)} />
        <Card subject="Edward Hook" price={Math.floor(Math.random() * 100)} />
        <Card subject="Brock Tomb" price={Math.floor(Math.random() * 100)} />
        <Card subject="Ivy Hubbies" price={Math.floor(Math.random() * 100)} />
        <Card subject="Mau Morals" price={Math.floor(Math.random() * 100)} />
      </div>
    </>
  );
};

export default App;

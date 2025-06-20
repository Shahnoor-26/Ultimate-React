import React from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-white">
        Learn About Redux Toolkit
      </h1>
      <TodoForm />
      <TodoItem />
    </>
  );
};

export default App;

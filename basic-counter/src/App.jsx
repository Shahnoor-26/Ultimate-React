import { useState } from "react";
import "./App.css";

const App = () => {
  let [count, updateCount] = useState(0);

  const increment = () => {
    if (count < 10) updateCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) updateCount(count - 1);
  };

  return (
    <>
      <h1>Basic Counter</h1>
      <h2>Current Count = {count}</h2>
      <button type="button" onClick={increment}>Increment</button>
      <span>---------------</span>
      <button type="button" onClick={decrement}>Decrement</button>
      <p>
        By Using UseState Hook You Can Update The Same Variable Once And It Will
        Change Everywhere, Like Count Display = {count}
      </p>
    </>
  );
};

export default App;

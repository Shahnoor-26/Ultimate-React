import { createContext, useContext } from "react";

// Todo Context Schema
export const TodoContext = createContext({
  todos: [
    {
      id: "123",
      todo: "todo",
      completed: false,
    },
  ],
  todoAdd: (todo) => {},
  todoDelete: (id) => {},
  todoUpdate: (id, todo) => {},
  completeToggle: (id) => {},
});

// Todo Context Provider
export const TodoProvider = TodoContext.Provider;

// Todo Custom Hook
export const useTodo = () => {
  return useContext(TodoContext);
};

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 123,
      todo: "Hello Redux",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoCreate: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
      };
      state.todos.push(todo);
    },
    todoDelete: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { todoCreate, todoDelete } = todoSlice.actions;
export default todoSlice.reducer;

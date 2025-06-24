import { configureStore } from "@reduxjs/toolkit";
import { Reducers } from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: Reducers,
  },
});

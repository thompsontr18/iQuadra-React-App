import { configureStore } from "@reduxjs/toolkit";
import recordsReducer from "./recordSlice"

export const store = configureStore({
  reducer: {
    records:recordsReducer,
  },
});

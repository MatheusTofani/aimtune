import { configureStore } from "@reduxjs/toolkit";
import calSliceReducer from "./calSlice";

export const store = configureStore({
    reducer: {
      cal: calSliceReducer
    },
});
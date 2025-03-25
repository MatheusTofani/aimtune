import { configureStore } from "@reduxjs/toolkit";
import calSliceReducer from "./calSlice";
import edpiSliceReducer from "./edpiSlice";

export const store = configureStore({
    reducer: {
      cal: calSliceReducer,
      edpi: edpiSliceReducer
    },
});
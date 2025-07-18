import { configureStore } from "@reduxjs/toolkit";
import hoverReducer from "./hoverslice";
import successReducer from "./successSlice";

export const store = configureStore({
  reducer: {
    hoverbooleen: hoverReducer,
    successbooleen: successReducer,
  },
});

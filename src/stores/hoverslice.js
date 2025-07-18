import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const hoverslice = createSlice({
  name: "hoverbooleen",
  initialState,
  reducers: {
    sethoverbooleen: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { sethoverbooleen } = hoverslice.actions;
export default hoverslice.reducer;

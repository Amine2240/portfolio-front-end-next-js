import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const successslice = createSlice({
  name: "successbooleen",
  initialState,
  reducers: {
    setsuccessbooleen: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setsuccessbooleen } = successslice.actions;
export default successslice.reducer;

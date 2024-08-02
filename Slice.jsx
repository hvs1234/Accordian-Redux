import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: 1,
};

const Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpen(state, action) {
      state.open = state.open === action.payload ? 0 : action.payload;
    },
  },
});

export const { setOpen } = Slice.actions;
export default Slice.reducer;

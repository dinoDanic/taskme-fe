import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ControlsState {}

const initialState: ControlsState = {};

export const countrolsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {},
});

// export const {} = countrolsSlice.actions;

export default countrolsSlice.reducer;

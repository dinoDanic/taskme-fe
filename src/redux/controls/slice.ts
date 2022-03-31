import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ControlsState {
  bodyZoom: boolean;
}

const initialState: ControlsState = {
  bodyZoom: false,
};

export const countrolsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setBodyZoom(state) {
      state.bodyZoom = !state.bodyZoom;
    },
  },
});

export const { setBodyZoom } = countrolsSlice.actions;

export default countrolsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface ControlsState {
  zoom: {
    body: boolean;
    newTask: boolean;
    newProject: boolean;
  };
}

const initialState: ControlsState = {
  zoom: {
    body: false,
    newTask: false,
    newProject: false,
  },
};

export const countrolsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setNewTaskZoom(state, action) {
      state.zoom.newTask = action.payload;
      state.zoom.body = action.payload;
    },
    setNewProjectZoom(state, action) {
      state.zoom.newProject = action.payload;
      state.zoom.body = action.payload;
    },
    setZoomFalse(state) {
      state.zoom.body = false;
      state.zoom.newTask = false;
      state.zoom.newProject = false;
    },
  },
});

export const { setNewTaskZoom, setNewProjectZoom, setZoomFalse } =
  countrolsSlice.actions;

export default countrolsSlice.reducer;

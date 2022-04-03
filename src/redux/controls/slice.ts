import { createSlice } from "@reduxjs/toolkit";

interface ControlsState {
  zoom: {
    body: boolean;
    newTask: boolean;
    newProject: boolean;
  };
  newTaskConfig: {
    parentId: string;
  };
}

const initialState: ControlsState = {
  zoom: {
    body: false,
    newTask: false,
    newProject: false,
  },
  newTaskConfig: {
    parentId: "",
  },
};

export const countrolsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setNewTaskZoom(state, action) {
      state.zoom.newTask = action.payload.state;
      state.zoom.body = action.payload.state;
      state.newTaskConfig.parentId = action.payload.parentId;
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
    setNewTaskConfig(state, action) {
      state.newTaskConfig = action.payload;
    },
  },
});

export const {
  setNewTaskZoom,
  setNewProjectZoom,
  setZoomFalse,
  setNewTaskConfig,
} = countrolsSlice.actions;

export default countrolsSlice.reducer;

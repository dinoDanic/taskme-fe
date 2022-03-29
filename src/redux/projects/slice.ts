import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectType } from "types";

interface StateType {
  myProjects: ProjectType[];
}

const initialState: StateType = {
  myProjects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects(state, action) {
      state.myProjects = action.payload;
    },
  },
});

export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;

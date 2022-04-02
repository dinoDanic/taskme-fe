import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectType } from "types";

interface StateType {
  myProjects: ProjectType[];
  projectById: ProjectType;
}

const initialState: StateType = {
  myProjects: [],
  projectById: {
    id: "",
    name: "",
  },
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects(state, action) {
      state.myProjects = action.payload;
    },
    addProject(state, action) {
      state.myProjects.push(action.payload);
    },
    setProjectById(state, action) {
      state.projectById = action.payload;
    },
  },
});

export const { setProjects, addProject, setProjectById } = projectSlice.actions;

export default projectSlice.reducer;

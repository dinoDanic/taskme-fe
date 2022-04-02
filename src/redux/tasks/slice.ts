import { createSlice } from "@reduxjs/toolkit";
import { Task } from "generated/graphql";

interface StateType {
  projectTasks: Task[];
}

const initialState: StateType = {
  projectTasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setProjectTasks(state, action) {
      state.projectTasks = action.payload;
    },
    addTaskToProjectTasks(state, action) {
      state.projectTasks.push(action.payload);
    },
  },
});

export const { setProjectTasks, addTaskToProjectTasks } = taskSlice.actions;

export default taskSlice.reducer;

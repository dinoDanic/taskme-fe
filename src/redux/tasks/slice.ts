import { createSlice } from "@reduxjs/toolkit";
import { PriorityEnum, Task } from "generated/graphql";

interface StateType {
  projectTasks: Task[];
  task: Task;
}

const initialState: StateType = {
  projectTasks: [],
  task: {
    id: "",
    name: "",
    priority: PriorityEnum.None,
    projectId: "",
  },
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
    setTask(state, action) {
      state.task = action.payload;
    },
  },
});

export const { setTask, setProjectTasks, addTaskToProjectTasks } =
  taskSlice.actions;

export default taskSlice.reducer;

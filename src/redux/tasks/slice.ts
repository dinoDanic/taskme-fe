import { createSlice } from "@reduxjs/toolkit";
import { PriorityEnum, Task, TaskStatusEnum } from "generated/graphql";

interface StateType {
  projectTasks: Task[];
  task: Task;
  tasks: Task[];
  subtasks: Task[];
}

const initialState: StateType = {
  projectTasks: [],
  tasks: [],
  subtasks: [],
  task: {
    status: TaskStatusEnum.Open,
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
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    addTaskToProjectTasks(state, action) {
      state.projectTasks.push(action.payload);
    },
    setTask(state, action) {
      state.task = action.payload;
    },
    setSubtasks(state, action) {
      state.subtasks = action.payload;
    },
  },
});

export const {
  setTasks,
  setTask,
  setSubtasks,
  setProjectTasks,
  addTaskToProjectTasks,
} = taskSlice.actions;

export default taskSlice.reducer;

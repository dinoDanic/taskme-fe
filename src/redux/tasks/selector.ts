import { RootState } from "redux/store";

export const projectTasksSelector = (state: RootState) =>
  state.tasks.projectTasks;

export const taskSelector = (state: RootState) => state.tasks.task;

export const subtasksSelector = (state: RootState) => state.tasks.subtasks;

import { RootState } from "redux/store";

export const projectTasksSelector = (state: RootState) =>
  state.tasks.projectTasks;

import { RootState } from "redux/store";

export const projectSelector = (state: RootState) => state.projects;
export const projectByIdSelector = (state: RootState) =>
  state.projects.projectById;

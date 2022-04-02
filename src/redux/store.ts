import { configureStore } from "@reduxjs/toolkit";
import ControlsReducer from "redux/controls/slice";
import UserReducer from "redux/user/slice";
import ProjectReducer from "redux/projects/slice";
import TasksReducer from "redux/tasks/slice";

export const store = configureStore({
  reducer: {
    controls: ControlsReducer,
    user: UserReducer,
    projects: ProjectReducer,
    tasks: TasksReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

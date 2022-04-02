import { RootState } from "redux/store";

export const currentUserSelector = (state: RootState) => state.user.currentUser;
export const allUsersSelector = (state: RootState) => state.user.allUsers;

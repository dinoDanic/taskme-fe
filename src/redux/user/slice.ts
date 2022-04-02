import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "generated/graphql";

interface StateType {
  currentUser: User;
  allUsers: User[];
}

const initialState: StateType = {
  currentUser: {
    email: "",
    id: "",
    role: "",
    name: "",
  },
  allUsers: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.currentUser.email = action.payload.email;
      state.currentUser.id = action.payload.id;
      state.currentUser.role = action.payload.role;
      state.currentUser.name = action.payload.name;
    },
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
  },
});

export const { setUserData, setAllUsers } = userSlice.actions;

export default userSlice.reducer;

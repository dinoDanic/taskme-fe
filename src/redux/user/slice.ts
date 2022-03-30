import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "generated/graphql";

const initialState: User = {
  email: "",
  id: "",
  role: "",
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.name = action.payload.name;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;

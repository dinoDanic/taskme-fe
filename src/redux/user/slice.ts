import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.email = action.payload.email;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;

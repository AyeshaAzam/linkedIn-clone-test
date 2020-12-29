import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      //payload is an object we passed along with it, with the action
      state.user = action.payload;
    },

    // state is the initial state of the userSlice which is null for now.
    // when ever we logout, I want to set the user back to null
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//Selectors ---> allow us to pull the information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

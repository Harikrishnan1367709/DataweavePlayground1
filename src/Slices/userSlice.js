import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Users: null,
};

export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.Users =  action.payload;
    },
    deleteUser: (state, action) => {
      state.Users = null;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

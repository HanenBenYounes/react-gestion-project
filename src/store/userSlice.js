import { createSlice } from "@reduxjs/toolkit";
const intialState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  intialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { logout, setCredentials } = userSlice.actions;
export default userSlice.reducer;

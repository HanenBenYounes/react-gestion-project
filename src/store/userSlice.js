import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
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

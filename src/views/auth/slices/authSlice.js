import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, userId: null },
  reducers: {
    setCredentials: (state, action) => {
      const { username, accessToken, userId } = action.payload;
      state.user = username;
      state.token = accessToken;
      state.userId = userId;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.userId = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;

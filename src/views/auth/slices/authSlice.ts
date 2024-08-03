import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";

type AuthState = {
  user: string | null;
  token: string | null;
  userId: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  userId: null,
};

type CredentialsPayload = {
  username?: string;
  accessToken: string;
  userId: string;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<CredentialsPayload>) => {
      const { username, accessToken, userId } = action.payload;
      if (username) {
        state.user = username;
      } else {
        state.user = null;
      }
      state.token = accessToken;
      state.userId = userId;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectUserId = (state: RootState) => state.auth.userId;

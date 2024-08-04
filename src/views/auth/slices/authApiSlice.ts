import { apiSlice } from "../../../redux/apiSlice.ts";

import { logOut, setCredentials } from "./authSlice.js";
import { setErrMsg } from "../../global/slices/globalStatesSlice.js";

type RegistrationCredentials = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

type LoginCredentials = Pick<RegistrationCredentials, "username" | "password">;

export type RefreshResponse = {
  accessToken: string;
  userId: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      { accessToken: string; userId: string },
      LoginCredentials
    >({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 1000);
        } catch (err) {
          console.log(err);
          dispatch(setErrMsg("Błąd wylogowywania, odśwież aplikacje"));
        }
      },
    }),
    refresh: builder.mutation<RefreshResponse, void>({
      query: () => ({
        url: "/refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken, userId } = data;
          dispatch(setCredentials({ accessToken, userId }));
        } catch (err: any) {
          if (err?.error?.status == "FETCH_ERROR") {
            dispatch(setErrMsg("Błąd serwera, sprawdź połączenie sieciowe"));
          }
          console.log(err);
        }
      },
    }),
    register: builder.mutation<void, RegistrationCredentials>({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useRegisterMutation,
} = authApiSlice;

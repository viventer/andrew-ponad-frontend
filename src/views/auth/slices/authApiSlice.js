import { useDispatch } from "react-redux";
import { apiSlice } from "../../../redux/apiSlice";

import { logOut, setCredentials } from "./authSlice";
import { setErrMsg } from "../../global/slices/globalStatesSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
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
    refresh: builder.mutation({
      query: () => ({
        url: "/refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken, userId } = data;
          console.log(accessToken);
          dispatch(setCredentials({ accessToken, userId }));
        } catch (err) {
          if (err?.error?.status == "FETCH_ERROR") {
            dispatch(setErrMsg("Błąd serwera, sprawdź połączenie sieciowe"));
          }
          console.log(err);
        }
      },
    }),
    register: builder.mutation({
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

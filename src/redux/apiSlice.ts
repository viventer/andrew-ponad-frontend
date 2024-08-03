import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { setCredentials } from "../views/auth/slices/authSlice";
import {
  setErrMsg,
  setIsLogged,
} from "../views/global/slices/globalStatesSlice";
import { RootState } from "./store";
import { RefreshResponse } from "../views/auth/slices/authApiSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.100.112:3500",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

type ExtraOptions = Record<string, any>;
const baseQueryWithReauth: any = async (
  args: FetchArgs,
  api: any,
  extraOptions: ExtraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log("sending refresh token");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    if (refreshResult?.data) {
      const username = api.getState().auth.user;
      const refreshResultData: RefreshResponse =
        refreshResult.data as RefreshResponse;
      api.dispatch(setCredentials({ ...refreshResultData, username }));
      result = await baseQuery(args, api, extraOptions);
    } else if (
      refreshResult?.error?.status === 401 &&
      JSON.parse(localStorage.getItem("persist")!)
    ) {
      api.dispatch(setErrMsg("Sesja wygasła. Zaloguj się ponownie."));
    } else {
      api.dispatch(setIsLogged(false));
    }
  } else if (result?.error?.status === 429) {
    api.dispatch(
      setErrMsg(
        "Wysyłasz za dużo zapytań do serwera! Spróbuj ponownie za minutę."
      )
    );
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Post", "User", "ErrorReport", "Category"],
  endpoints: (builder) => ({}),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setCredentials } from "../views/auth/slices/authSlice";
import {
  setErrMsg,
  setIsLogged,
} from "../views/global/slices/globalStatesSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://andrew-ponad-backend.onrender.com",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403 || result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else if (
      refreshResult?.error?.originalStatus === 401 &&
      JSON.parse(localStorage.getItem("persist"))
    ) {
      api.dispatch(setErrMsg("Sesja wygasła. Zaloguj się ponownie."));
    } else {
      api.dispatch(setIsLogged(false));
    }
  } else if (
    result?.error?.status === 429 ||
    result?.error?.originalStatus === 429
  ) {
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
  tagTypes: ["Post", "User", "ErrorReport"],
  endpoints: (builder) => ({}),
});

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setCredentials, logOut } from "../views/auth/slices/authSlice";
import { setErrMsg } from "../views/global/slices/globalStatesSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500",
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
    } else {
      api.dispatch(logOut());
    }
  } else if (
    result?.error?.status === 429 ||
    result?.error?.originalStatus === 429
  ) {
    api.dispatch(
      setErrMsg(
        result?.error?.data ||
          "Wysyłasz za dużo zapytań do serwera! Spróbuj ponownie za minutę."
      )
    );
  } else if (
    result?.error?.status === 401 ||
    result?.error?.originalStatus === 401
  ) {
    api.dispatch(setErrMsg("Sesja wygasła. Zaloguj się ponownie."));
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({}),
});

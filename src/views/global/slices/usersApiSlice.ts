import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../redux/apiSlice.ts";
import { RootState } from "../../../redux/store";
import { UserType } from "../types/users.types.ts";

interface UsersResult {
  ids: string[];
  entities: { [id: string]: UserType };
}

const usersAdapter = createEntityAdapter<UserType>({});

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResult, void>({
      query: () => ({
        url: "/users",
        validateStatus: (response: Response, result: UserType[]) => {
          return response.status === 200;
        },
      }),
      transformResponse: (responseData: UserType[]) => {
        const loadedUsers = responseData.map((user) => {
          user.id = user._id;
          return user;
        });
        return usersAdapter.setAll(initialState, loadedUsers);
      },
    }),
    getUserById: builder.query({
      query: (userId) => ({
        url: `/users/${userId}`,
        validateStatus: (response: Response, result: UserType) => {
          return response.status === 200;
        },
      }),
      transformResponse: (responseData: UserType) => {
        const user = { ...responseData, id: responseData._id };
        return usersAdapter.setOne(initialState, user);
      },
    }),
    updateUser: builder.mutation({
      query: ({ userId, userData }: { userId: string; userData: any }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "User", id: arg.userId },
      ],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
    }),
    addNewUser: builder.mutation({
      query: (initialUserData: UserType) => ({
        url: "/users",
        method: "POST",
        body: {
          ...initialUserData,
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddNewUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApiSlice;

export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();
const selectUserByIdResult = usersApiSlice.endpoints.getUserById.select("");

const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data
);

const selectUserByIdData = createSelector(
  selectUserByIdResult,
  (userResult) => userResult.data
);

export const { selectAll: selectAllUsers, selectIds: selectUserIds } =
  usersAdapter.getSelectors(
    (state: RootState) => selectUsersData(state) ?? initialState
  );

export const selectUserById = (state: RootState, userId: string) =>
  selectUserByIdData(state)?.entities?.[userId] ?? null;

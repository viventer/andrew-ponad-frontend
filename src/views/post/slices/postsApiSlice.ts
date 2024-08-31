import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../redux/apiSlice.ts";
import { RootState } from "../../../redux/store";
import { PostType } from "../types/post.types.ts";
import { PostsResult } from "../types/post.types.ts";

const postsAdapter = createEntityAdapter<PostType>({});

const initialState = postsAdapter.getInitialState();

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResult, { isLogged: boolean } | void>({
      query: (args) => {
        const isLogged = args?.isLogged;
        return {
          url: "/posts",
          headers: {
            ...(isLogged !== undefined ? { isLogged: String(isLogged) } : {}),
          },
          validateStatus: (response: Response, result: PostType[]) =>
            response.status === 200,
        };
      },
      transformResponse: (responseData: PostType[]) => {
        const loadedPosts = responseData.map((post) => {
          post.id = post._id;
          return post;
        });
        return postsAdapter.setAll(initialState, loadedPosts);
      },
    }),
    // prettier-ignore
    getPostById: builder.query<PostsResult, { isLogged?: boolean; postId?: string }>({
      query: ({ postId, isLogged }) => ({
        url: `/posts/${postId}`,
        headers: {
          isLogged: isLogged,
        },
        validateStatus: (response: Response, result: PostType) => {
          return response.status === 200;
        },
      }),
      transformResponse: (responseData: PostType) => {
        const post = { ...responseData, id: responseData._id };
        return postsAdapter.setOne(initialState, post);
      },

    }),
    updatePost: builder.mutation({
      query: ({ postId, postData }) => ({
        url: `/posts/${postId}`,
        method: "PATCH",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
    deletePost: builder.mutation({
      query: (postId: string) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
        body: { postId },
      }),
    }),
    addNewPost: builder.mutation({
      query: (initialPostData) => ({
        url: "/posts",
        method: "POST",
        body: { ...initialPostData },
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    addPostView: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}/addview`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useAddPostViewMutation,
} = postsApiSlice;

export const selectPostsResult = postsApiSlice.endpoints.getPosts.select();
const selectPostByIdResult = postsApiSlice.endpoints.getPostById.select({});

const selectPostsData = createSelector(
  selectPostsResult,
  (postsResult) => postsResult.data
);

const selectPostByIdData = createSelector(
  selectPostByIdResult,
  (postResult) => postResult.data
);

export const { selectAll: selectAllPosts, selectIds: selectPostIds } =
  postsAdapter.getSelectors(
    (state: RootState) => selectPostsData(state) ?? initialState
  );

export const selectPostById = (state: RootState, postId: string) =>
  selectPostByIdData(state)?.entities?.[postId] ?? null;

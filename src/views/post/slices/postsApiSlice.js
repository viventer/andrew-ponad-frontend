import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../redux/apiSlice";

const postsAdapter = createEntityAdapter({});

const initialState = postsAdapter.getInitialState();

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "/posts",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedPosts = responseData.map((post) => {
          post.id = post._id;
          return post;
        });
        return postsAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Post", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Post", id })),
          ];
        } else return [{ type: "Post", id: "LIST" }];
      },
    }),
    getPostById: builder.query({
      query: ({ postId, isLogged }) => ({
        url: `/posts/${postId}`,
        headers: {
          isLogged: isLogged,
        },
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const post = { ...responseData, id: responseData._id };
        return postsAdapter.setOne(initialState, post);
      },
      providesTags: (result, error, postId) => [{ type: "Post", id: postId }],
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
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
        body: { id },
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
const selectPostByIdResult = postsApiSlice.endpoints.getPostById.select();

const selectPostsData = createSelector(
  selectPostsResult,
  (postsResult) => postsResult.data
);

const selectPostByIdData = createSelector(
  selectPostByIdResult,
  (postResult) => postResult.data
);

export const { selectAll: selectAllPosts, selectIds: selectPostIds } =
  postsAdapter.getSelectors((state) => selectPostsData(state) ?? initialState);

export const selectPostById = (state, postId) =>
  postsAdapter.getSelectors().selectById(selectPostByIdData(state), postId) ??
  initialState;

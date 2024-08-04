import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../redux/apiSlice.ts";
import { RootState } from "../../../redux/store";

export interface Post {
  __v: number;
  _id: string;
  postNumber: number;
  author: string;
  category: string;
  categoryName: string;
  content: PostRow[];
  createdAt: string;
  id: string;
  thumbnail: string;
  title: string;
  updatedAt?: string;
  views: number;
  visibility: string;
  [key: string]: any;
}

export type PostEntity = [string, Post];

export interface PostRowElement {
  type: "textEditor" | "image" | "video";
  textEditorContent?: string;
  imagePreview?: null | string;
  videoUrl?: string;
}

export type PostRow = PostRowElement[];

interface PostsResult {
  ids: string[];
  entities: { [id: string]: Post };
}

const postsAdapter = createEntityAdapter<Post>({});

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
          validateStatus: (response: Response, result: Post[]) =>
            response.status === 200,
        };
      },
      transformResponse: (responseData: Post[]) => {
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
        validateStatus: (response: Response, result: Post) => {
          return response.status === 200;
        },
      }),
      transformResponse: (responseData: Post) => {
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

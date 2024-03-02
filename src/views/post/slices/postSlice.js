import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialState = {
  thumbnailPreview: null,
  editedPostId: null,
  postTitle: "",
  postRows: [
    [
      {
        type: "textEditor",
        textEditorContent: "",
        imagePreview: null,
      },
      {
        type: "image",
        textEditorContent: "",
        imagePreview: null,
      },
    ],
  ],
  postCategory: "Wybierz kategorię",
  postVisibility: "Wybierz widoczność",
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    setThumbnailPreview: (state, action) => {
      state.thumbnailPreview = action.payload;
    },
    setEditedPostId: (state, action) => {
      state.editedPostId = action.payload;
    },
    setPostTitle: (state, action) => {
      state.postTitle = action.payload;
    },
    setPostRows: (state, action) => {
      state.postRows = action.payload;
    },
    setPostCategory: (state, action) => {
      state.postCategory = action.payload;
    },
    setPostVisibility: (state, action) => {
      state.postVisibility = action.payload;
    },
    resetPostState: (state) => {
      return initialState;
    },
  },
});

export const {
  setThumbnailPreview,
  setPostRows,
  setPostTitle,
  setPostCategory,
  setPostVisibility,
  setEditedPostId,
  resetPostState,
} = postSlice.actions;

export const selectThumbnailPreview = (state) => state.post.thumbnailPreview;
export const selectThumbnailFile = (state) => state.post.thumbnailPreview;
export const selectPostTitle = (state) => state.post.postTitle;
export const selectPostRows = (state) => state.post.postRows;
export const selectPostCategory = (state) => state.post.postCategory;
export const selectPostVisibility = (state) => state.post.postVisibility;
export const selectEditedPostId = (state) => state.post.editedPostId;

export default postSlice.reducer;

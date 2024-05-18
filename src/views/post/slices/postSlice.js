import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thumbnailPreview: null,
  editedPostId: null,
  postTitle: "",
  postCategory: "Wybierz kategorię",
  postVisibility: "Szkic",
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
    setPostCategory: (state, action) => {
      state.postCategory = action.payload;
    },
    setPostVisibility: (state, action) => {
      state.postVisibility = action.payload;
    },
    resetPostState: (state, action) => {
      return initialState;
    },
  },
});

export const {
  setThumbnailPreview,
  setPostTitle,
  setPostCategory,
  setPostVisibility,
  setEditedPostId,
  resetPostState,
} = postSlice.actions;

export const selectThumbnailPreview = (state) => state.post.thumbnailPreview;
export const selectThumbnailFile = (state) => state.post.thumbnailPreview;
export const selectPostTitle = (state) => state.post.postTitle;
export const selectPostCategory = (state) => state.post.postCategory;
export const selectPostVisibility = (state) => state.post.postVisibility;
export const selectEditedPostId = (state) => state.post.editedPostId;

export default postSlice.reducer;

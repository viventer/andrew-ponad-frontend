import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    thumbnailUrl: "",
    postTitle: "",
    postRows: [
      [
        {
          type: "textEditor",
          textEditorContent: "",
          imageUrl: "",
        },
        {
          type: "image",
          textEditorContent: "",
          imageUrl: "",
        },
      ],
    ],
    postCategory: "Wybierz kategorię",
    postVisibility: "Wybierz widoczność",
  },
  reducers: {
    setThumbnailUrl: (state, action) => {
      state.thumbnailUrl = action.payload;
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
  },
});

export const {
  setThumbnailUrl,
  setPostTitle,
  setPostRows,
  setPostCategory,
  setPostVisibility,
} = postSlice.actions;

export const selectThumbnailUrl = (state) => state.post.thumbnailUrl;
export const selectPostTitle = (state) => state.post.postTitle;
export const selectPostRows = (state) => state.post.postRows;
export const selectPostCategory = (state) => state.post.postCategory;
export const selectPostVisibility = (state) => state.post.postVisibility;

export default postSlice.reducer;

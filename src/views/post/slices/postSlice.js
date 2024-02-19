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
    postVisibility: "",
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
  },
});

export const { setThumbnailUrl, setPostTitle, setPostRows, setPostCategory } =
  postSlice.actions;

export const selectThumbnailUrl = (state) => state.post.thumbnailUrl;
export const selectPostTitle = (state) => state.post.postTitle;
export const selectPostRows = (state) => state.post.postRows;
export const selectPostCategory = (state) => state.post.postCategory;

export default postSlice.reducer;

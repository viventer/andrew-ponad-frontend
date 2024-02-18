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
  },
});

export const { setThumbnailUrl, setPostTitle, setPostRows } = postSlice.actions;

export const selectThumbnailUrl = (state) => state.post.thumbnailUrl;
export const selectPostTitle = (state) => state.post.postTitle;
export const selectPostRows = (state) => state.post.postRows;

export default postSlice.reducer;

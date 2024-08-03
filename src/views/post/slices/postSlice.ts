import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";

type PostState = {
  thumbnailPreview: string;
  editedPostId: string;
  postTitle: string;
  postCategoryName: string;
  postVisibility: string;
};

const initialState: PostState = {
  thumbnailPreview: "",
  editedPostId: "",
  postTitle: "",
  postCategoryName: "Wybierz kategorię",
  postVisibility: "Szkic",
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    setThumbnailPreview: (state, action: PayloadAction<string>) => {
      state.thumbnailPreview = action.payload;
    },
    setEditedPostId: (state, action: PayloadAction<string>) => {
      state.editedPostId = action.payload;
    },
    setPostTitle: (state, action: PayloadAction<string>) => {
      state.postTitle = action.payload;
    },
    setPostCategoryName: (state, action: PayloadAction<string>) => {
      state.postCategoryName = action.payload;
    },
    setPostVisibility: (state, action: PayloadAction<string>) => {
      state.postVisibility = action.payload;
    },
    resetPostState: () => {
      return initialState;
    },
  },
});

export const {
  setThumbnailPreview,
  setPostTitle,
  setPostCategoryName,
  setPostVisibility,
  setEditedPostId,
  resetPostState,
} = postSlice.actions;

export const selectThumbnailPreview = (state: RootState) =>
  state.post.thumbnailPreview;
export const selectThumbnailFile = (state: RootState) =>
  state.post.thumbnailPreview;
export const selectPostTitle = (state: RootState) => state.post.postTitle;
export const selectPostCategoryName = (state: RootState) =>
  state.post.postCategoryName;
export const selectPostVisibility = (state: RootState) =>
  state.post.postVisibility;
export const selectEditedPostId = (state: RootState) => state.post.editedPostId;

export default postSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  images: [],
};

const errorReportSlice = createSlice({
  name: "errorReport",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    addImage: (state, action) => {
      state.images = [...state.images, action.payload];
    },
    deleteImage: (state, action) => {
      state.images = state.images.filter(
        (image, index) => index != action.payload
      );
    },
    changeImage: (state, action) => {
      state.images[action.payload.index] = action.payload.newUrl;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const {
  setDescription: setErrorReportDescription,
  setTitle: setErrorReportTitle,
  addImage: addErrorReportImage,
  deleteImage: deleteErrorReportImage,
  changeImage: changeErrorReportImage,
  resetState: resetErrorReportState,
} = errorReportSlice.actions;

export const selectErrorReportTitle = (state) => state.errorReport.title;
export const selectErrorReportDescription = (state) =>
  state.errorReport.description;
export const selectErrorReportImages = (state) => state.errorReport.images;

export default errorReportSlice.reducer;

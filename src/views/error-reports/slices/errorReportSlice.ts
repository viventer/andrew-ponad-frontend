import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";

type ErrorReportState = {
  title: string;
  description: string;
  images: string[];
};

const initialState: ErrorReportState = {
  title: "",
  description: "",
  images: ["placeholder"],
};

const errorReportSlice = createSlice({
  name: "errorReport",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    addImage: (state, action: PayloadAction<string>) => {
      state.images = [...state.images, action.payload];
    },
    deleteImage: (state, action: PayloadAction<number>) => {
      state.images = state.images.filter(
        (image, index) => index != action.payload
      );
    },
    changeImage: (
      state,
      action: PayloadAction<{ index: number; newUrl: string }>
    ) => {
      state.images[action.payload.index] = action.payload.newUrl;
    },
    resetState: (): ErrorReportState => {
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

export const selectErrorReportTitle = (state: RootState) =>
  state.errorReport.title;
export const selectErrorReportDescription = (state: RootState) =>
  state.errorReport.description;
export const selectErrorReportImages = (state: RootState) =>
  state.errorReport.images;

export default errorReportSlice.reducer;

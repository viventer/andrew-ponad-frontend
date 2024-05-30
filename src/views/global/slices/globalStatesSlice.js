import { createSlice } from "@reduxjs/toolkit";

const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: {
    errMsg: null,
    dialogMsg: null,
    successMsg: null,
    dialogAnswer: null,
    dialogOptions: [],
    dialogAction: null,
    isLoading: false,
    userData: null,
    isLogged: false,
    availablePostCategories: [
      "Windows Server",
      "Urządzenia sieciowe",
      "Ubuntu Server",
      "openSUSE Server",
      "inne",
    ],
    isUserInfoVisible: false,
    isSearchBoxVisible: false,
    isErrorReportVisible: false,
  },
  reducers: {
    setErrMsg: (state, action) => {
      if (action.payload == "" && state.errMsg.includes("Sesja wygasła")) {
        state.errMsg = action.payload;
        window.location.reload();
      } else if (!state.errMsg.includes("Sesja wygasła")) {
        state.errMsg = action.payload;
      }
    },
    setDialogMsg: (state, action) => {
      state.dialogMsg = action.payload;
    },
    setSuccessMsg: (state, action) => {
      state.successMsg = action.payload;
    },
    setDialogAnswer: (state, action) => {
      state.dialogAnswer = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setDialogOptions: (state, action) => {
      state.dialogOptions = action.payload;
    },
    setDialogAction: (state, action) => {
      state.dialogAction = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setAvailablePostCategories: (state, action) => {
      state.availablePostCategories = action.payload;
    },
    setIsUserInfoVisible: (state, action) => {
      state.isUserInfoVisible = action.payload;
    },
    setIsSearchBoxVisible: (state, action) => {
      state.isSearchBoxVisible = action.payload;
    },
    toggleIsUserInfoVisible: (state) => {
      state.isUserInfoVisible = !state.isUserInfoVisible;
    },
    setIsErrorReportVisible: (state, action) => {
      state.isErrorReportVisible = action.payload;
    },
    toggleIsErrorReportVisible: (state) => {
      state.isErrorReportVisible = !state.isErrorReportVisible;
    },
  },
});

export const {
  setErrMsg,
  setDialogMsg,
  setSuccessMsg,
  setDialogAnswer,
  setDialogOptions,
  setDialogAction,
  setIsLoading,
  setUserData,
  setIsLogged,
  setAvailablePostCategories,
  setIsUserInfoVisible,
  setIsSearchBoxVisible,
  toggleIsUserInfoVisible,
  setIsErrorReportVisible,
  toggleIsErrorReportVisible,
} = globalStatesSlice.actions;

export const selectErrMsg = (state) => state.globalStates.errMsg;
export const selectDialogMsg = (state) => state.globalStates.dialogMsg;
export const selectSuccessMsg = (state) => state.globalStates.successMsg;
export const selectDialogAnswer = (state) => state.globalStates.dialogAnswer;
export const selectDialogOptions = (state) => state.globalStates.dialogOptions;
export const selectDialogAction = (state) => state.globalStates.dialogAction;
export const selectIsLoading = (state) => state.globalStates.isLoading;
export const selectUserData = (state) => state.globalStates.userData;
export const selectIsLogged = (state) => state.globalStates.isLogged;
export const selectAvailablePostCategories = (state) =>
  state.globalStates.availablePostCategories;
export const selectIsUserInfoVisible = (state) =>
  state.globalStates.isUserInfoVisible;
export const selectIsSearchBoxVisible = (state) =>
  state.globalStates.isSearchBoxVisible;
export const selectIsErrorReportVisible = (state) =>
  state.globalStates.isErrorReportVisible;

export default globalStatesSlice.reducer;

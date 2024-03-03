import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

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
  },
  reducers: {
    setErrMsg: (state, action) => {
      state.errMsg = action.payload;
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

export default globalStatesSlice.reducer;

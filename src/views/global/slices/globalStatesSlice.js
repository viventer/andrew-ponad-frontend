import { createSlice } from "@reduxjs/toolkit";

const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: {
    errMsg: null,
    dialogMsg: null,
    dialogAnswer: null,
    isLoading: false,
    userData: null,
  },
  reducers: {
    setErrMsg: (state, action) => {
      state.errMsg = action.payload;
    },
    setDialogMsg: (state, action) => {
      state.dialogMsg = action.payload;
    },
    setDialogAnswer: (state, action) => {
      state.dialogAnswer = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {
  setErrMsg,
  setDialogMsg,
  setDialogAnswer,
  setIsLoading,
  setUserData,
} = globalStatesSlice.actions;

export const selectErrMsg = (state) => state.globalStates.errMsg;
export const selectDialogMsg = (state) => state.globalStates.dialogMsg;
export const selectDialogAnswer = (state) => state.globalStates.dialogAnswer;
export const selectIsLoading = (state) => state.globalStates.isLoading;
export const selectUserData = (state) => state.globalStates.userData;

export default globalStatesSlice.reducer;

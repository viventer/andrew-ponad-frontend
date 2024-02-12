import { createSlice } from "@reduxjs/toolkit";

const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: {
    errMsg: null,
    dialogMsg: null,
    dialogAnswer: null,
    isLoading: false,
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
  },
});

export const { setErrMsg, setDialogMsg, setDialogAnswer, setIsLoading } =
  globalStatesSlice.actions;

export default globalStatesSlice.reducer;

export const selectErrMsg = (state) => state.globalStates.errMsg;
export const selectDialogMsg = (state) => state.globalStates.dialogMsg;
export const selectDialogAnswer = (state) => state.globalStates.dialogAnswer;
export const selectIsLoading = (state) => state.globalStates.isLoading;

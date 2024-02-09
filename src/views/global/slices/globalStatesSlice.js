import { createSlice } from "@reduxjs/toolkit";

const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: {
    errMsg: null,
    dialogMsg: null,
  },
  reducers: {
    setErrMsg: (state, action) => {
      state.errMsg = action.payload;
    },
    setDialogMsg: (state, action) => {
      state.dialogMsg = action.payload;
    },
  },
});

export const { setErrMsg, setDialogMsg } = globalStatesSlice.actions;

export default globalStatesSlice.reducer;

export const selectErrMsg = (state) => state.globalStates.errMsg;
export const selectDialogMsg = (state) => state.globalStates.dialogMsg;

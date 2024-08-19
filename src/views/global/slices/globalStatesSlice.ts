import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { UserType } from "../types/user.types";

type GlobalStates = {
  errMsg: string;
  dialogMsg: string;
  successMsg: string;
  dialogAnswer: string;
  dialogOptions: string[];
  dialogAction: string;
  isLoading: boolean;
  userData: null | UserType;
  isLogged: boolean;
  availablePostCategories: string[];
  isUserInfoVisible: boolean;
  isSearchBoxVisible: boolean;
  isErrorReportVisible: boolean;
};

const initialState: GlobalStates = {
  errMsg: "",
  dialogMsg: "",
  successMsg: "",
  dialogAnswer: "",
  dialogOptions: [],
  dialogAction: "",
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
};

const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState,
  reducers: {
    setErrMsg: (state, action: PayloadAction<string>) => {
      if (action.payload == "" && state?.errMsg?.includes("Sesja wygasła")) {
        state.errMsg = action.payload;
        window.location.reload();
      } else if (!state?.errMsg?.includes("Sesja wygasła")) {
        state.errMsg = action.payload;
      }
    },
    setDialogMsg: (state, action: PayloadAction<string>) => {
      state.dialogMsg = action.payload;
    },
    setSuccessMsg: (state, action: PayloadAction<string>) => {
      state.successMsg = action.payload;
    },
    setDialogAnswer: (state, action: PayloadAction<string>) => {
      state.dialogAnswer = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setDialogOptions: (state, action: PayloadAction<string[]>) => {
      state.dialogOptions = action.payload;
    },
    setDialogAction: (state, action: PayloadAction<string>) => {
      state.dialogAction = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserType | null>) => {
      state.userData = action.payload;
    },
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setAvailablePostCategories: (state, action: PayloadAction<string[]>) => {
      state.availablePostCategories = action.payload;
    },
    setIsUserInfoVisible: (state, action: PayloadAction<boolean>) => {
      state.isUserInfoVisible = action.payload;
    },
    setIsSearchBoxVisible: (state, action: PayloadAction<boolean>) => {
      state.isSearchBoxVisible = action.payload;
    },
    toggleIsUserInfoVisible: (state) => {
      state.isUserInfoVisible = !state.isUserInfoVisible;
    },
    setIsErrorReportVisible: (state, action: PayloadAction<boolean>) => {
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

export const selectErrMsg = (state: RootState) => state.globalStates.errMsg;
export const selectDialogMsg = (state: RootState) =>
  state.globalStates.dialogMsg;
export const selectSuccessMsg = (state: RootState) =>
  state.globalStates.successMsg;
export const selectDialogAnswer = (state: RootState) =>
  state.globalStates.dialogAnswer;
export const selectDialogOptions = (state: RootState) =>
  state.globalStates.dialogOptions;
export const selectDialogAction = (state: RootState) =>
  state.globalStates.dialogAction;
export const selectIsLoading = (state: RootState) =>
  state.globalStates.isLoading;
export const selectUserData = (state: RootState) => state.globalStates.userData;
export const selectIsLogged = (state: RootState) => state.globalStates.isLogged;
export const selectAvailablePostCategories = (state: RootState) =>
  state.globalStates.availablePostCategories;
export const selectIsUserInfoVisible = (state: RootState) =>
  state.globalStates.isUserInfoVisible;
export const selectIsSearchBoxVisible = (state: RootState) =>
  state.globalStates.isSearchBoxVisible;
export const selectIsErrorReportVisible = (state: RootState) =>
  state.globalStates.isErrorReportVisible;

export default globalStatesSlice.reducer;

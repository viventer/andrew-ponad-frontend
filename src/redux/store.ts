import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { apiSlice } from "./apiSlice";
import authReducer from "../views/auth/slices/authSlice";
import globalStatesReducer from "../views/global/slices/globalStatesSlice";
import postReducer from "../views/post/slices/postSlice";
import adminPanelReducer from "../views/admin-panel/slices/adminPanelSlice";
import errorReportReducer from "../views/error-reports/slices/errorReportSlice";

const globalStatesPersistConfig = {
  key: "globalStates",
  storage,
};

const postPersistConfig = {
  key: "posts",
  storage,
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  globalStates: persistReducer(globalStatesPersistConfig, globalStatesReducer),
  post: persistReducer(postPersistConfig, postReducer),
  adminPanel: adminPanelReducer,
  errorReport: errorReportReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: false,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

setupListeners(store.dispatch);

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

import { GlobalStyles } from "./views/global/styles/GlobalStyles.js";

import App from "./App.jsx";

const theme = {
  colors: {
    black: "#000000",
    almostBlack: "#141414",
    darkNavy: "#14213D",
    navy: "#15315c",
    orange: "#FCA311",
    sunset: "#F1C47B",
    lightGray: "#E5E5E5",
    gray: "#5C5C5C",
    darkGray: "#222",
    white: "#ffffff",
    green: "#7BF189",
    red: "#F17B89",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

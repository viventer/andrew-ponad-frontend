import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./views/global/styles/GlobalStyles.js";
// import { store } from "./views/global/redux/store.js"

import App from "./App.jsx";

const theme = {
  colors: {
    black: "#000000",
    navy: "#14213D",
    orange: "#FCA311",
    sunset: "#F1C47B",
    lightGray: "#E5E5E5",
    gray: "#5C5C5C",
    white: "#ffffff",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);

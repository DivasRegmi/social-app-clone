import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import CssBaseline from "@material-ui/core/CssBaseline";

import { ThemeProvider } from "@material-ui/core";
import { store, persistor } from "./redux/store";


import theme from "./theme";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

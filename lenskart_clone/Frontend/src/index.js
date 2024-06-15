import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider,extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./ContextApi/AuthContext";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import {  persistor } from './redux/store';
import "./style/color.css"

const theme = extendTheme({
  colors: {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)",
    accent: "var(--accent-color)",
    background: "var(--background-color)",
    text: "var(--text-color)",
  },
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </AuthProvider>
);

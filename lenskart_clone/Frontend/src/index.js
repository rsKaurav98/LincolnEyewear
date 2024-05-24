import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./ContextApi/AuthContext";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import {  persistor } from './redux/store';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </AuthProvider>
);

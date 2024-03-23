import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import {store, persistor} from "./redux/store.js";
import { ColorModeScript ,ChakraProvider,theme} from '@chakra-ui/react';

import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/layouts/Loader/Loader.jsx";

// const export server = "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

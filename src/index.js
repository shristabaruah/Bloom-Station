import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {CustomTheme} from "./theme";
import {store} from "./Redux/app/store";
import {Provider} from "react-redux";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={CustomTheme}>
        <Provider store={store}>
        <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

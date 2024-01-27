import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { customTheme } from "./theme/theme.ts";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

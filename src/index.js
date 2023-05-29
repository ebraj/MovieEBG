import React from "react";
import ReactDOM from "react-dom/client";
import "scss/index.scss";
import App from "./App";
import { SearchProvider } from "contexts/searchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <SearchProvider>
      <App />
    </SearchProvider>
  </>
);

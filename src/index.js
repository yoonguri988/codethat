import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Codethat</title>
    </Helmet>
    <Main />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from "react-dom/client";
import RouteHandler from "./RouteHandler";
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouteHandler />
  </React.StrictMode>
);

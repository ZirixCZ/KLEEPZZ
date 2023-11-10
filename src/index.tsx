import React from 'react';
import ReactDOM from "react-dom/client";
import RouteHandler from "./RouteHandler";
import ApolloWrapper from './ApolloWrapper';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloWrapper>
      <RouteHandler />
    </ApolloWrapper>
  </React.StrictMode>
);

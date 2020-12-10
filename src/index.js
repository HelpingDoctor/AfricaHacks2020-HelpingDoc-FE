import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth0ProviderwithHistory from "./Auth0ProviderWithHistory";
import "./index.css";

ReactDOM.render(
  <Router>
    <Auth0ProviderwithHistory>
      <App />
    </Auth0ProviderwithHistory>
  </Router>,

  document.getElementById("root")
);

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./shared/home/Home";
import About from "./shared/about/About";
import DashboardNurse from "./nurse/pages/dashboard/Dashboard";
import Error404 from "./shared/error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard-nurse" component={DashboardNurse} />

        {/* Error 404 - Page Not Found */}
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

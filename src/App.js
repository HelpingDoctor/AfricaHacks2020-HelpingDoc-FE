import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./PrivateRoute";

import Loading from "./shared/Loading/Loading";
import Home from "./shared/home/Home";
import About from "./shared/about/About";
import DashboardNurse from "./nurse/pages/dashboard/Dashboard";
import Error404 from "./shared/error404/Error404";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <PrivateRoute path="/nurse-dashboard" component={DashboardNurse} />

        {/* Error 404 - Page Not Found */}
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
}

export default App;

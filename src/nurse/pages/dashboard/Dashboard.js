import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import SideNav from "../../components/sidenav/SideNav";
import PatientProfile from "../patient-profile/PatientProfile";
import PatientsList from "../patients/PatientsList";
import Settings from "../../../shared/settings/Settings";

const Dashboard = () => {
  const { url } = useRouteMatch();
  return (
    <div id="dashboard">
      <div className="dashboard-container row">
        <SideNav />
        <div className="col-sm-10 main-content">
          <Switch>
            <Route path={`${url}/patients`} component={PatientsList} exact />
            <Route path={`${url}/settings`} component={Settings} exact />
            <Route
              path={`${url}/patient-profile/:id`}
              component={PatientProfile}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

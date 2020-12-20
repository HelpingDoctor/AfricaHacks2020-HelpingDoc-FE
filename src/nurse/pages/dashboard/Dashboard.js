import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import SideNav from "../../components/sidenav/SideNav";
import Activity from "../activity/Activity";
import PatientProfile from "../patient-profile/PatientProfile";
import Patients from "../patients/Patients";
import Settings from "../../../shared/settings/Settings";
import "./Dashboard.css";

const Dashboard = () => {
  const { url } = useRouteMatch();
  return (
    <div id="dashboard" className="vh-100">
      <div className="dashboard-container row vh-100">
        <SideNav />
        <div className="col-sm-10 main-content pl-0 h-100">
          <Switch>
            <Route path={`${url}/activity`} component={Activity} exact />
            <Route path={`${url}/patients`} component={Patients} exact />
            <Route path={`${url}/settings`} component={Settings} exact />
            <Route path={`${url}/patients/:id`} component={PatientProfile} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";

import PatientIcon from "../../../assets/nurse-sidenav/patients.svg";
import NotificationsIcon from "../../../assets/nurse-sidenav/notifications.svg";
import SettingsIcon from "../../../assets/nurse-sidenav/settings.svg";
import "./SideNav.css";

const SideNav = () => {
  const NavItems = [
    {
      icon: PatientIcon,
      title: "Patients",
      path: "patients",
    },
    {
      icon: NotificationsIcon,
      title: "Notifications",
      path: "nurse-notifications",
    },
    {
      icon: SettingsIcon,
      title: "Settings",
      path: "nurse-settings",
    },
  ];
  return (
    <div className="col-sm-2" id="nurse-side-nav">
      <div className="py-3 px-4">helpingDoc</div>
      <ul className="side-nav-items">
        {NavItems.map((navitem) => {
          return (
            <Link to={`nurse-dashboard/${navitem.path}`}>
              <li key={navitem.icon} className="mb-3">
                <button
                  className={`btn d-flex sidenav-item w-100 pl-4`}
                  type="button"
                >
                  <img
                    src={navitem.icon}
                    alt={`${navitem.title} icon`}
                    className="mr-2"
                  />
                  <span className="nav-item-title d-md-block">
                    {navitem.title}
                  </span>
                </button>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;

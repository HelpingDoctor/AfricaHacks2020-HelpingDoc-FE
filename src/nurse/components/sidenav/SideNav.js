import React from "react";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";
import SideNavIcons from "./SideNavIcons";
import { NavItems } from "./SideNavItems";

import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="col-sm-2 pr-0" id="nurse-side-nav">
      <div className="py-3 px-4">
        <Link to="/">helpingDoc</Link>
      </div>
      <ul className="side-nav-items">
        {NavItems.map((navitem) => {
          return (
            <li key={navitem.path} className="mb-3">
              <NavLink
                activeClassName="active"
                className="pl-4 btn d-flex sidenav-item w-100 align-items-center"
                type="button"
                to={`/nurse/${navitem.path}`}
              >
                <SideNavIcons
                  pathD={navitem.pathD}
                  pathD2={navitem.pathD2}
                  point={navitem.point}
                />
                <span className="nav-item-title d-md-block">
                  {navitem.title}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;

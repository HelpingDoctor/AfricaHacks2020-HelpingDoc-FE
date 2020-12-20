import React from "react";

import BellIcon from "../../../assets/bell.svg";
import "./Header.css";

function Header() {
  return (
    <div className="activity-top-header d-flex justify-content-between py-2 px-2">
      <div className="left-1 align-self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5B61F2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-home mr-3"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span className="font-weight-bold">Activity</span>
      </div>
      <div className="d-flex">
        <img src={BellIcon} alt="Notification badge" />
      </div>
    </div>
  );
}

export default Header;

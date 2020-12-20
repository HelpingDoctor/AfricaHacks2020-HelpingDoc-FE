import React from "react";
import "./TopHeader.css";

const Header = ({ name }) => {
  return (
    <div className="d-flex">
      <div className="left-side">
        <img src="" alt="" />
        <span>{name}</span>
      </div>
      <div className="right-side">
        <img src="" alt="" />
        <div className="profile">{name}</div>
      </div>
    </div>
  );
};

export default Header;

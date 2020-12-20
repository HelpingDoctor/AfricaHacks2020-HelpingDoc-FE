import React from "react";
import "./BottomHeader.css";

const BottomHeader = ({ name }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="left-side-b">
        <span>Patient List</span>{" "}
        <span>
          <img src="" alt="" />
        </span>
        <span>{name}</span>
      </div>
      <div className="right-side-b">
        <button>
          <span>
            <i class="fa fa-print" aria-hidden="true"></i>
          </span>
        </button>
        <button>
          <span>Edit patient</span>
        </button>
      </div>
    </div>
  );
};

export default BottomHeader;

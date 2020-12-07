import React from "react";
import Avatar from "../patient-avatar/Avatar";

import "./PatientItem.css";

function PatientItem({ id, name, age, dob, diag, triag }) {
  return (
    <div id="patient-item">
      <div className="patient-id">{id}</div>
      <div className="patient-name-image">
        <Avatar width="30px" height="30px" />
        <span>{name}</span>
      </div>
      <div className="patient-age">{age}</div>
      <div className="patient-dob">{dob}</div>
      <div className="patient-diagnosis">{diag}</div>
      <div className="triag">{triag}</div>
      <div className="view-patient">
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default PatientItem;

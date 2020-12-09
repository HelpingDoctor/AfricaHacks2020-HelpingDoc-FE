import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../patient-avatar/Avatar";

import "./PatientItem.css";

function PatientItem({ id, name, age, dob, diag, triag }) {
  return (
    <tr id="patient-item">
      <td className="patient-id">{id}</td>
      <td className="patient-name-image d-flex">
        <Avatar width="30px" height="30px" />
        <span>{name}</span>
      </td>
      <td className="patient-age">{age}</td>
      <td className="patient-dob">{dob}</td>
      <td className="patient-diagnosis">{diag}</td>
      <td className="triag">{triag}</td>
      <td className="view-patient dropdown-menu-right">
        <button
          class="btn btn-secondary"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <Link to={`/patients/${id}`}>
            <button class="dropdown-item" type="button">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit /
              View
            </button>
          </Link>
          <button class="dropdown-item" type="button">
            <i class="fa fa-clone" aria-hidden="true"></i> Duplicate
          </button>
          <button class="dropdown-item" type="button">
            <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default PatientItem;

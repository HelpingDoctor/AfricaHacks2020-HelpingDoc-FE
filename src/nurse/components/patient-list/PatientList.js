import React from "react";
import PatientItem from "../patient-item/PatientItem";
import patientData from "./import";
import "./PatientList.css";

function PatientList() {
  return (
    <div className="patient-list-container">
      {patientData.length ? (
        patientData.map((patient) => (
          <PatientItem
            name={patient.name}
            id={patient.id}
            age={patient.age}
            dob={patient.dob}
            diag={patient.diag}
            triag={patient.triag}
          />
        ))
      ) : (
        <div text-center>
          <h2>No Patient Found</h2>
        </div>
      )}
    </div>
  );
}

export default PatientList;

import React from "react";
import PatientItem from "../../components/patient-item/PatientItem";
import patientData from "./import";

const PatientsList = () => {
  return (
    <div>
      <div className="patient-list-container">
        {patientData.map((patient) => (
          <PatientItem
            name={patient.name}
            id={patient.id}
            age={patient.age}
            dob={patient.dob}
            diag={patient.diag}
            triag={patient.triag}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientsList;

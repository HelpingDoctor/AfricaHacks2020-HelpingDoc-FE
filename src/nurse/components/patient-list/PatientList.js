import React from "react";
import PatientItem from "../patient-item/PatientItem";
import patientData from "./import";
import "./PatientList.css";

function PatientList() {
  return (
    <>
      {patientData.length ? (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Patient ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Birth Day</th>
              <th scope="col">Diagnosis</th>
              <th scope="col">Triage</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      ) : (
        <div text-center>
          <h2>No Patient Found</h2>
        </div>
      )}
    </>
  );
}

export default PatientList;

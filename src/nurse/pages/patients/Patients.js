import React, { useState } from "react";
import TopHeader from "../../components/patient-list-header/TopHeader";
import BottomHeader from "../../components/patient-list-header/BottomHeader";
import PatientList from "../../components/patient-list/PatientList";

import "./Patients.css";

const Patients = () => {
  return (
    <div>
      <TopHeader />
      <BottomHeader />
      <PatientList />
    </div>
  );
};

export default Patients;

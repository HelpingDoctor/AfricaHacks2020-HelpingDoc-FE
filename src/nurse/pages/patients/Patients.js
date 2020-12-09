import React, { useState } from "react";
import TopHeader from "../../components/patient-list-header/TopHeader";
import MidHeader from "../../components/patient-list-header/MidHeader";
import BottomHeader from "../../components/patient-list-header/BottomHeader";
import PatientList from "../../components/patient-list/PatientList";

import "./Patients.css";

const Patients = () => {
  return (
    <div>
      <TopHeader />
      <MidHeader />
      <BottomHeader />
      <PatientList />
    </div>
  );
};

export default Patients;

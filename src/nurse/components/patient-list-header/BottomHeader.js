import React from "react";

function BottomHeader() {
  return (
    <div className="patients-header-bottom d-flex px-4 py-3">
      <div className="d-flex align-items-center">Patient ID</div>
      <div className="name">Name</div>
      <div className="age">Age</div>
      <div className="dob">Birth Day</div>
      <div className="diag">Diagonisis</div>
      <div className="triag">Triage</div>
    </div>
  );
}

export default BottomHeader;

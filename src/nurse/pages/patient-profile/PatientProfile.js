import React from "react";
import AvatarD from "../../../shared/doctor-avatar/AvatarD";
import "./PatientProfile.css";

function PatientProfile() {
  return (
    <div id="patientProfile" className="px-3 vh-100">
      <h1>Patient Profile</h1>
      <div className="row">
        <div className="col-8">
          <div className="patient-basicinfo py-2 px-3 mb-3">
            <div className="row">
              <div className="col-md-3 d-flex">
                <div className="patient-image-wrap">
                  <img src="" alt="" />
                </div>
                <div className="patient-namenage">
                  <h2>Sasha Kumar</h2>
                  <p className="age">39 yrs</p>
                </div>
              </div>
              <div className="col-md-3">
                <h2>Phone Number</h2>
                <p className="patient-tel">08123456789</p>
              </div>
              <div className="col-md-3">
                <h2>NIN No.</h2>
                <p className="patient-nin">12345678911</p>
              </div>
              <div className="col-md-3">
                <h2>Health Plan</h2>
                <p className="patient-plan">CGHS</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 d-flex justify-content-between">
                <div className="height-wrap">
                  <h3>Height</h3>
                  <p className="patient-height">176</p>
                </div>
                <div className="weight-wrap">
                  <h3>Weight</h3>
                  <p className="patient-weight">59</p>
                </div>
                <div className="bloodtype-wrap">
                  <h3>Blood Type</h3>
                  <p className="patient-bloodtype">A+</p>
                </div>
                {/* <div className="smooker-wrap">
                  <h3>Smooker status</h3>
                  <p className="smooker-status">No</p>
                </div> */}
              </div>
              <div className="col-3">
                <h2>Email</h2>
                <p className="patient-email">shasha_k@gmail.com</p>
              </div>
              <div className="col-3">
                <h2>Condition</h2>
                <p className="patient-condition">Acute Migraine</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="family-history mb-2">
                <h2>Family History</h2>
                <ul className="bg-white family-history-items">
                  <li className="d-flex justify-content-between mb-1">
                    <span className="family-condition">Alzemiea</span>
                    <span className="family-severity severe">Severe</span>
                  </li>
                  <li className="d-flex justify-content-between mb-1">
                    <span className="family-condition">Diabetes Type</span>
                    <span className="family-severity moderate">Moderate</span>
                  </li>
                </ul>
              </div>
              <div className="patient-immunizations mb-2">
                <h2>Immunizations</h2>
                <ul className="bg-white patient-immunization-items">
                  <li className="patient-immunization-item mb-1">
                    <span>DTP</span>
                    <div className="d-flex">
                      <span className="immu-status expired">Expired</span>
                      <span className="immu-date">12|09|2019</span>
                    </div>
                  </li>
                  <li className="patient-immunization-item mb-1">
                    <span>BCG</span>
                    <div className="d-flex">
                      <span className="immu-status active">Active</span>
                      <span className="immu-date">09|01|2020</span>
                    </div>
                  </li>
                  <li className="patient-immunization-item mb-1">
                    <span>Typhod</span>
                    <div className="d-flex">
                      <span className="immu-status active">Active</span>
                      <span className="immu-date">23|11|2019</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="patient-allergies">
                <h2>Allergies</h2>
                <ul className="bg-white patient-allergies-items">
                  <li className="d-flex justify-content-between mb-1">
                    <span className="all-substance">Spectrum Penecillin</span>
                    <span className="all-content">0.2kg</span>
                  </li>
                  <li className="d-flex justify-content-between mb-1">
                    <span className="all-substance">Egg</span>
                    <span className="all-content">8ku/L</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-8">
              <div className="medical-history">
                <div className="d-flex justify-content-between">
                  <h2>Medical History</h2>
                  <span>View all</span>
                </div>
                <ul className="bg-white medical-history-items px-2">
                  <li className="px-2">
                    <h3 className="condition-name text-bold">Cold Flu</h3>
                    <p className="codition-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="doctor-name">Ahmad</span>
                        <span className="date">20|06|19</span>
                      </div>
                      <span className="d-flex align-items-center">Closed</span>
                    </div>
                  </li>
                  <li className="px-2">
                    <h3 className="condition-name text-bold">Cold Flu</h3>
                    <p className="codition-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="doctor-name">Ahmad</span>
                        <span className="date">20|06|19</span>
                      </div>
                      <span className="d-flex align-items-center">Closed</span>
                    </div>
                  </li>
                  <li className="px-2">
                    <h3 className="condition-name text-bold">Cold Flu</h3>
                    <p className="codition-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="doctor-name">Ahmad</span>
                        <span className="date">20|06|19</span>
                      </div>
                      <span className="d-flex align-items-center">Closed</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lab-test">
                <div className="d-flex justify-content-between">
                  <h2>Lab Test</h2>
                  <span>View all</span>
                </div>
                <ul className="d-flex bg-white lab-test-items justify-content-between">
                  <li>
                    <p className="test-name">Liver panel</p>
                    <div className="d-flex">
                      <span className="lab-name">Pals clinic</span>
                      <span className="test-date">19|01|2020</span>
                    </div>
                  </li>
                  <li>
                    <p className="test-name">Liver panel</p>
                    <div className="d-flex">
                      <span className="lab-name">Pals clinic</span>
                      <span className="test-date">19|01|2020</span>
                    </div>
                  </li>
                  <li>
                    <p className="test-name">Liver panel</p>
                    <div className="d-flex">
                      <span className="lab-name">Pals clinic</span>
                      <span className="test-date">19|01|2020</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="recent-doctors">
            <div className="d-flex justify-content-between">
              <h2>Previous Doctors</h2>
              <span>View all</span>
            </div>
            <ul className="bg-white previous-doctors-items">
              <li className="d-flex">
                <div className="doctor-avatar d-flex align-items-center">
                  <AvatarD width="60px" height="60px" />
                </div>
                <div className="doctor-details">
                  <p className="doctor-name">Doctor Khan</p>
                  <p className="doctor-speciality">General Physician</p>
                  <div className="d-flex justify-content-end">
                    <span className="doctor-status">Active</span>
                  </div>
                </div>
              </li>
              <li className="d-flex">
                <div className="doctor-avatar  d-flex align-items-center">
                  <AvatarD width="60px" height="60px" />
                </div>
                <div className="doctor-details">
                  <p className="doctor-name">Doctor Jame</p>
                  <p className="doctor-speciality">Psychiatrist</p>
                  <div className="d-flex justify-content-end">
                    <span className="doctor-status">InActive</span>
                  </div>
                </div>
              </li>
              <li className="d-flex">
                <div className="doctor-avatar d-flex align-items-center">
                  <AvatarD width="60px" height="60px" />
                </div>
                <div className="doctor-details">
                  <p className="doctor-name">Doctor Ahmad</p>
                  <p className="doctor-speciality">General Physician</p>
                  <div className="d-flex justify-content-end">
                    <span className="doctor-status">Active</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="recent-medications">
            <div className="d-flex justify-content-between">
              <h2>Previous Medications</h2>
              <span>View all</span>
            </div>
            <ul className="bg-white recent-medications-items">
              <li className="d-flex mb-2 w-100">
                <div className="medication-avatar"></div>
                <div className="medication-details">
                  <p className="medication-name">Piramil</p>
                  <p className="medication-status">Active</p>
                  <div className="d-flex justify-content-end">
                    <span className="medication-dosage">Twice Daily</span>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-2 w-100">
                <div className="medication-avatar"></div>
                <div className="medication-details">
                  <p className="medication-name">Piramil</p>
                  <p className="medication-status">Active</p>
                  <div className="d-flex justify-content-end">
                    <span className="medication-dosage">Twice Daily</span>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-2 w-100">
                <div className="medication-avatar"></div>
                <div className="medication-details">
                  <p className="medication-name">Piramil</p>
                  <p className="medication-status">Active</p>
                  <div className="d-flex justify-content-end">
                    <span className="medication-dosage">Twice Daily</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;

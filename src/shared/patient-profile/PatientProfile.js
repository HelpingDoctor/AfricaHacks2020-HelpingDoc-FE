import React, { useState } from "react";
import TopHeader from "../components/patient-p-header/TopHeader";
import BottomHeader from "../components/patient-p-header/BottomHeader";
import Avatar from "../components/patient-avatar/Avatar";
import AvatarD from "../components/doctor-avatar/AvatarD";
import { Form } from "react-bootstrap";
import "./PatientProfile.css";

const tabData = [
  { buttonName: "Medical history" },
  { buttonName: "Previous Doctor" },
  { buttonName: "Previous Medications" },
  { buttonName: "Lab test" },
  { buttonName: "Immunizations" },
  { buttonName: "Others" },
];

const PatientProfile = ({ doctorname, dateedited, filename, filedate }) => {
  const [tab, setTab] = useState(tabData);
  const [value, setValues] = useState(0);

  const { buttonName, medicalHistory, food, etc } = tab[value];
  return (
    <div id="patient-pro" className="vh-100">
      <TopHeader />
      <BottomHeader />
      <main>
        <div className="d-flex profile-wrap">
          <div className="left-box mr-4">
            <div className="basic-profile d-flex">
              <div className="photo-n-email mr-2 px-3 py-5">
                <Avatar width="90px" height="90px" />
                <div className="patient-name text-center">
                  <input
                    type="text"
                    value="Diana koopa"
                    className="text-center"
                  />
                </div>
                <div className="patient-number">
                  <input
                    className="text-center"
                    type="text"
                    value="+234 8134 1202 54"
                  />
                </div>
              </div>
              <div className="other-info d-flex px-4 pb-4 pt-5">
                <div className="left">
                  <div className="patient-gender mb-4">
                    <label htmlFor="p-gender">Gender</label>
                    <Form.Control
                      className="form-control"
                      name="gender"
                      // value={currentContact.gender}
                      as="select"
                      // onChange={handleInputChange}
                      // disabled={disabled}
                    >
                      <option>Null</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Control>
                  </div>
                  <div className="patient-address mb-4">
                    <label htmlFor="p-address">Street Address</label>
                    <input type="text" />
                  </div>
                  <div className="health-plan">
                    <label htmlFor="p-plan">Health plan</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="mid">
                  <div className="patient-birthday mb-4">
                    <label htmlFor="p-birthday">Birthday</label>
                    <Form.Control
                      className="p-0"
                      type="date"
                      name="birthday"
                      // value={currentContact.dateOfBirth}
                      // onChange={handleInputChange}
                      // disabled={disabled}
                    />
                  </div>
                  <div className="patient-city mb-4">
                    <label htmlFor="p-city">City</label>
                    <input type="text" />
                  </div>
                  <div className="patient-date-registered">
                    <label htmlFor="p-date-registered">Date Registered</label>
                    <Form.Control
                      className="border-bottom p-0"
                      type="date"
                      name="dateregistered"
                      // value={currentContact.dateOfBirth}
                      // onChange={handleInputChange}
                      // disabled={disabled}
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="patient-blood mb-4">
                    <label htmlFor="p-blood">Blood Group</label>
                    <input type="text" />
                  </div>
                  <div className="patient-height mb-4">
                    <label htmlFor="p-height">Height</label>
                    <input type="text" />
                  </div>
                  <div className="patient-weight">
                    <label htmlFor="p-weight">Weight</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="medical-profile mt-4 pt-3 pb-2">
              <div className="tab-buttons d-flex justify-content-between px-5">
                {tabData.map((button, index) => {
                  return <button>{button.buttonName}</button>;
                })}
              </div>
              <div className="details-container py-2">
                {/* <ul className="bg-white medical-history-items px-2">
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
                </ul> */}
                {/* <ul className="bg-white previous-doctors-items d-flex">
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
                </ul> */}
                {/* <ul className="bg-white recent-medications-items d-flex">
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
                </ul> */}
                {/* <ul className="d-flex bg-white lab-test-items justify-content-between">
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
                </ul> */}

                {/* <ul className="bg-white patient-immunization-items d-flex">
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
                </ul> */}

                {/* <div className="d-flex others-medical-profile">
                  <div className="family-history mb-2">
                    <h2>Family History</h2>
                    <ul className="bg-white family-history-items">
                      <li className="d-flex justify-content-between mb-1">
                        <span className="family-condition">Alzemiea</span>
                        <span className="family-severity severe">Severe</span>
                      </li>
                      <li className="d-flex justify-content-between mb-1">
                        <span className="family-condition">Diabetes Type</span>
                        <span className="family-severity moderate">
                          Moderate
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="patient-allergies">
                    <h2>Allergies</h2>
                    <ul className="bg-white patient-allergies-items">
                      <li className="d-flex justify-content-between mb-1">
                        <span className="all-substance">
                          Spectrum Penecillin
                        </span>
                        <span className="all-content">0.2kg</span>
                      </li>
                      <li className="d-flex justify-content-between mb-1">
                        <span className="all-substance">Egg</span>
                        <span className="all-content">8ku/L</span>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="patient-notes px-2 mb-3">
              <div className="title d-flex justify-content-between">
                <span className="bold">Notes</span>
                <span className="bold-blue">See all</span>
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-100"
              ></textarea>
              <div className="bottom-notes">
                <p className="recent-note">Lorem ipsum dolor sit amet</p>
                <div className="d-flex">
                  <div className="d-flex">
                    <img src="" alt="" />
                    <span className="doctor-name">{doctorname}</span>
                  </div>
                  <span className="date-edited">{dateedited}</span>
                </div>
              </div>
            </div>
            <div className="attachments px-3">
              <div className="d-flex justify-content-between">
                <span className="bold">Attachments</span>
                <span className="bold-blue">Add file</span>
              </div>
              <ul className="p-0">
                <li className="d-flex">
                  <div>
                    <img src="" alt="" />{" "}
                    <span className="file-name">{filename}</span>
                  </div>
                  <div className="file-date">{filedate}</div>
                </li>
                <li className="d-flex">
                  <div>
                    <img src="" alt="" />{" "}
                    <span className="file-name">{filename}</span>
                  </div>
                  <div className="file-date">{filedate}</div>
                </li>
                <li className="d-flex">
                  <div>
                    <img src="" alt="" />{" "}
                    <span className="file-name">{filename}</span>
                  </div>
                  <div className="file-date">{filedate}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientProfile;

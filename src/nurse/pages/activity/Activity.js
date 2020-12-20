import React from "react";

import Header from "../../components/activity-header/Header";
import AvatarD from "../../../shared/components/doctor-avatar/AvatarD";
import Avatar from "../../../shared/components/patient-avatar/Avatar";
import "./Activity.css";

function Activity({ name, date }) {
  return (
    <div id="activity" className="h-100">
      <Header />
      <main className="px-3 mt-4">
        <div className="basic-info">
          <h1>Hello {name}</h1>
          <p className="more-info">You can manage your activity here!</p>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div className="col-md-8 chart"></div>
          <div className="px-3 py-2 recent-chat-list">
            <div className="section-title">
              <h2>Recent Chats</h2>
            </div>
            <ul className="recent-chat-items">
              <li className="recent-chat-item d-flex justify-content-between">
                <div className="name-n-pic d-flex align-items-center">
                  <div className="chat-pic mr-3">
                    <AvatarD width="45px" height="45px" />
                  </div>
                  <div className="chat-name">Dr John</div>
                </div>
                <div className="chat-icon d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B61F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-circle"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
              </li>
              <li className="recent-chat-item d-flex justify-content-between">
                <div className="name-n-pic d-flex align-items-center">
                  <div className="chat-pic mr-3">
                    <AvatarD width="45px" height="45px" />
                  </div>
                  <div className="chat-name">Dr Aisha</div>
                </div>
                <div className="chat-icon d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B61F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-circle"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
              </li>
              <li className="recent-chat-item d-flex justify-content-between">
                <div className="name-n-pic d-flex align-items-center">
                  <div className="chat-pic mr-3">
                    <AvatarD width="45px" height="45px" />
                  </div>
                  <div className="chat-name">Dr Samuel</div>
                </div>
                <div className="chat-icon d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B61F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-circle"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
              </li>
              <li className="recent-chat-item d-flex justify-content-between">
                <div className="name-n-pic d-flex align-items-center">
                  <div className="chat-pic mr-3">
                    <AvatarD width="45px" height="45px" />
                  </div>
                  <div className="chat-name">Dr Khan</div>
                </div>
                <div className="chat-icon d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B61F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-circle"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
              </li>
            </ul>
            <div className="view-all-chats d-flex justify-content-end">
              <span>View all</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="top-treatment-list px-3 py-2">
            <div className="section-title">
              <h2>Top treatment</h2>
            </div>
            <ul className="top-treatment-items">
              <li className="treatment-item">Headache</li>
              <li className="treatment-item">Typhoid</li>
              <li className="treatment-item">Malaria</li>
              <li className="treatment-item">Cancer</li>
            </ul>
          </div>
          <div className="recent-patients-list px-3 py-2">
            <div className="d-flex justify-content-between section-title">
              <h2 className="d-flex align-self-center">Patients</h2>
              <div className="view-all-patients d-flex align-self-center">
                View all
              </div>
            </div>
            <ul className="patients-items d-flex justify-content-between">
              <li className="patient-item px-2 py-2">
                <div className="patient-avatar-icon d-flex align-items-center justify-content-center">
                  <Avatar width="30px" height="30px" />
                </div>
                <div className="patient-info d-flex flex-column">
                  <span className="patient-name">Yusuf Abdullahi</span>
                  <span className="patient-case">Headache</span>
                </div>
              </li>
              <li className="patient-item px-2 py-2">
                <div className="patient-avatar-icon d-flex align-items-center justify-content-center">
                  <Avatar width="30px" height="30px" />
                </div>
                <div className="patient-info d-flex flex-column">
                  <span className="patient-name">Yusuf Abdullahi</span>
                  <span className="patient-case">Headache</span>
                </div>
              </li>
              <li className="patient-item px-2 py-2">
                <div className="patient-avatar-icon d-flex align-items-center justify-content-center">
                  <Avatar width="30px" height="30px" />
                </div>
                <div className="patient-info d-flex flex-column">
                  <span className="patient-name">Yusuf Abdullahi</span>
                  <span className="patient-case">Headache</span>
                </div>
              </li>
              <li className="patient-item px-2 py-2">
                <div className="patient-avatar-icon d-flex align-items-center justify-content-center">
                  <Avatar width="30px" height="30px" />
                </div>
                <div className="patient-info d-flex flex-column">
                  <span className="patient-name">Yusuf Abdullahi</span>
                  <span className="patient-case">Headache</span>
                </div>
              </li>
              <div className="d-flex flex-column add-new-patient px-2 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6C63FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                Add patient
              </div>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Activity;

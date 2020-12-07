import React from "react";
import PatientImage from "../../assets/patient-icon.svg";
import "./Avatar.css";

const Avatar = ({ image, width, height }) => {
  return (
    <div>
      <img
        style={{ width: width, height: height }}
        src={image ? image : PatientImage}
        alt=""
      />
    </div>
  );
};

export default Avatar;

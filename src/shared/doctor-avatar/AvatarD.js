import React from "react";
import DoctorImage from "../../assets/doctor-icon.svg";
import "./AvatarD.css";

const AvatarD = ({ image, width, height }) => {
  return (
    <div>
      <img
        style={{ width: width, height: height }}
        src={image ? image : DoctorImage}
        alt=""
      />
    </div>
  );
};

export default AvatarD;

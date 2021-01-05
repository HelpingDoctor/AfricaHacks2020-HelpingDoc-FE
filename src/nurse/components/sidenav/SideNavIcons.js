import React from "react";

function SideNavIcons({ pathD, pathD2, point }) {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      className="mr-2"
      clipRule
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={pathD}
      />
      {pathD2 && (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={pathD2}
        />
      )}
      {point && <polyline points={point}></polyline>}
    </svg>
  );
}

export default SideNavIcons;

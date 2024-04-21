import React from "react";

const HatchLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#231F20" />
      <g clipPath="url(#clip0_1408_119)">
        <mask
          id="mask0_1408_119"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="6"
          y="7"
          width="20"
          height="18"
        >
          <path d="M26 7.00488H6V24.9768H26V7.00488Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1408_119)">
          <path d="M17.3628 7.00488H14.6377V24.9768H17.3628V7.00488Z" fill="#33E9D5" />
          <path d="M26 14.6284H18.9585V17.3536H26V14.6284Z" fill="#A286E7" />
          <path d="M13.0415 14.6284H6V17.3536H13.0415V14.6284Z" fill="#F19639" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1408_119">
          <rect width="20" height="20" fill="white" transform="translate(6 6)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HatchLogo;

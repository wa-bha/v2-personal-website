import React from "react";

const MadeInWellingtonBadge = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      fill="transparent"
    >
      <circle cx="70" cy="70" r="70" fill="#DFFD83" />
      <defs>
        <path id="circlePath" d="M 70, 70 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
      </defs>

      <g id="spinning-text" className="origin-center animate-spin-slow">
        <text fill="#353535" fontSize="16" letterSpacing="2" className="font-satoshi font-medium">
          <textPath href="#circlePath">MADE IN WELLINGTON, NZ ~</textPath>
        </text>
      </g>
    </svg>
  );
};

export default MadeInWellingtonBadge;

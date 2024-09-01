import React from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-6 pt-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-2">
      <ExperienceCard companyName="hatch" />
      <ExperienceCard companyName="jarden" />
      <ExperienceCard companyName="hortplus" />
    </div>
  );
};

export default ExperienceSection;

import React from "react";

import HatchLogo from "../icons/HatchLogo";
import JardenLogo from "../icons/JardenLogo";

export enum CompanyName {
  Hatch = "Hatch Invest",
  Jarden = "Jarden"
}

interface Experience {
  companyName: CompanyName;
  position: string;
  startDate: string;
  endDate?: string;
  location: string;
  employmentType: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { companyName, position, startDate, endDate, location, employmentType } = experience;

  // Maps company names to their logo
  const companyLogos: { [key in CompanyName]: JSX.Element } = {
    [CompanyName.Hatch]: <HatchLogo className="h-5 w-5" />,
    [CompanyName.Jarden]: <JardenLogo className="h-5 w-5" />
  };

  const logo = companyLogos[companyName];

  const calculateDuration = (start: string, end?: string) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const diffInMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    return years > 0
      ? `${years} year${years > 1 ? "s" : ""}, ${months} month${months > 1 ? "s" : ""}`
      : `${months} month${months > 1 ? "s" : ""}`;
  };

  return (
    <div className="flex flex-col gap-7">
      <article className="flex">
        <div className="pr-2">{logo} </div>

        <div>
          <header className="h-5 flex items-center">
            <h5>{companyName}</h5>
          </header>

          <section className="pt-1.5">
            <h6 className="text-sm font-semibold">{position}</h6>
            <p className="text-gray-600 text-xs font-semibold tracking-tighter">
              {`${startDate} → ${endDate ? endDate : "Present"} (${calculateDuration(startDate, endDate)})`}
              <span className="font-semibold">{" • "}</span>
              <span className="font-light">{location}</span>
              <span className="font-semibold">{" • "}</span>
              <span className="font-light">{employmentType}</span>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;

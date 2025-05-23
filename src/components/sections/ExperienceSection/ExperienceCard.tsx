"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { cva } from "class-variance-authority";
import { CircleArrowRight } from "lucide-react";

import ExternalLink from "../../common/ExternalLink";
import HatchLogo from "../../icons/HatchLogo";
import JardenLogo from "../../icons/JardenLogo";
import HortplusLogo from "../../icons/HortPlusLogo";
import { WobbleCard } from "./wobble-card";

import jarden from "/public/images/jarden.jpg";
import hatch from "/public/images/hatch.jpg";
import hortplus from "/public/images/hortplus.jpg";

type CompanyNames = "hatch" | "jarden" | "hortplus";

interface CompanyInfo {
  applicationName: string;
  description: string;
  location: string;
  href: string;
  logo: React.JSX.Element;
  image: StaticImageData;
}

// Define company information
const companies: Record<CompanyNames, CompanyInfo> = {
  hatch: {
    applicationName: "Hatch Invest",
    description: "Jarden & FNZ Joint Venture",
    location: "Wellington, NZ",
    href: "https://www.hatchinvest.nz/",
    logo: <HatchLogo className="h-5 w-5" />,
    image: hatch
  },
  jarden: {
    applicationName: "Jarden Direct",
    description: "Jarden",
    location: "Wellington, NZ",
    href: "https://www.jardendirect.co.nz/",
    logo: <JardenLogo className="h-5 w-5" />,
    image: jarden
  },
  hortplus: {
    applicationName: "SprayPlan Manager",
    description: "HortPlus",
    location: "Hawkes Bay, NZ (Remote)",
    href: "https://www.hortplus.com/spray-plan-manager/",
    logo: <HortplusLogo className="h-5 w-5" />,
    image: hortplus
  }
};

const underlineVariants = cva(
  "ml-[-0.25rem] w-fit slide-in-underline flex items-center space-x-1.5",
  {
    variants: {
      variant: {
        default: "after:bg-slate-50",
        hatch: "after:bg-hatch-purple",
        jarden: "after:bg-direct-green",
        hortplus: "after:bg-hortplus-blue"
      }
    }
  }
);

const backgroundVariants = cva("w-full sm:h-56 bg-gray-300 drop-shadow-md", {
  variants: {
    variant: {
      default: "bg-slate-50",
      hatch: "bg-hatch-purple",
      jarden: "bg-direct-green",
      hortplus: "bg-hortplus-blue"
    }
  }
});

const ExperienceCard = ({ companyName }: { companyName: CompanyNames }) => {
  const { applicationName, description, location, href, logo, image } = companies[companyName];

  return (
    <section>
      {/* Image */}
      <WobbleCard href={href} containerClassName={backgroundVariants({ variant: companyName })}>
        <Image
          className="absolute right-[-2rem] top-10 rounded-lg object-contain"
          src={image}
          width={500}
          height={500}
          alt={`${companyName} screenshot`}
        />
      </WobbleCard>

      <div className="mx-2 mt-2 flex flex-col space-y-1.5">
        {/* Company and location */}
        <div className="flex flex-col">
          <span className="text-sm font-medium leading-tight tracking-tight text-gray-800">
            {description}
          </span>
          <span className="text-xs tracking-tight text-slate-500">{location}</span>
        </div>

        {/* Product header with logo */}
        <ExternalLink href={href}>
          <div className={underlineVariants({ variant: companyName })}>
            {logo}

            <h6 className="text-lg font-semibold tracking-tighter">
              <span>{applicationName}</span>
              <CircleArrowRight className="mb-0.5 inline-flex h-[1em] pl-1" strokeWidth="2.5px" />
            </h6>
          </div>
        </ExternalLink>
      </div>
    </section>
  );
};

export default ExperienceCard;

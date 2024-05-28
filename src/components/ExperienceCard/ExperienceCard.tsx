"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { cva } from "class-variance-authority";

import ExternalLink from "../ExternalLink";
import HatchLogo from "../icons/HatchLogo";
import JardenLogo from "../icons/JardenLogo";
import HortplusLogo from "../icons/HortPlusLogo";
import { WobbleCard } from "../ui/wobble-card";

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
    logo: <HatchLogo className="w-7 h-7" />,
    image: hatch
  },
  jarden: {
    applicationName: "Jarden Direct",
    description: "Jarden",
    location: "Wellington, NZ",
    href: "https://www.jardendirect.co.nz/",
    logo: <JardenLogo className="w-7 h-7" fillColor="#FFFFFF" backgroundColor="#28A47D" />,
    image: jarden
  },
  hortplus: {
    applicationName: "SprayPlan Manager",
    description: "HortPlus",
    location: "Hawkes Bay, NZ (Remote)",
    href: "https://www.hortplus.com/spray-plan-manager/",
    logo: <HortplusLogo className="w-7 h-7" />,
    image: hortplus
  }
};

const underlineVariants = cva(
  "slide-in-underline text-lg font-medium leading-tight ml-[-0.25rem]",
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

const backgroundVariants = cva("w-full sm:h-60 bg-gray-300 drop-shadow-md", {
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
      <WobbleCard containerClassName={backgroundVariants({ variant: companyName })}>
        <Image
          className="top-10 md:top-24 right-[-2rem] absolute rounded-lg object-contain"
          src={image}
          width={500}
          height={500}
          alt={`${companyName} screenshot`}
        />
      </WobbleCard>

      {/* Text underneath */}
      <div className="mx-2 mt-2 flex flex-col">
        <div className="flex items-center justify-between">
          {/* Header */}
          <ExternalLink href={href}>
            <h6 className={underlineVariants({ variant: companyName })}>{applicationName} ↗</h6>
          </ExternalLink>

          {logo}
        </div>
        <span className="text-sm text-gray-800 leading-tight">{description}</span>
        <span className="text-xs font-light text-slate-500 tracking-tight">{location}</span>
      </div>
    </section>
  );
};

export default ExperienceCard;

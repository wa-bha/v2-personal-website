"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { CircleArrowRight } from "lucide-react";

import ExternalLink from "../../common/ExternalLink";
import HatchLogo from "../../icons/HatchLogo";
import JardenLogo from "../../icons/JardenLogo";
import HortplusLogo from "../../icons/HortPlusLogo";
import { WobbleCard } from "./wobble-card";

import jarden from "/public/images/jarden.jpg";
import hatch from "/public/images/hatch.jpg";
import hortplus from "/public/images/hortplus.jpg";

type CompanyName = "hatch" | "jarden" | "hortplus";

interface CompanyInfo {
  name: string;
  description: string;
  location: string;
  href: string;
  image: StaticImageData;
  bgClass: string;
  underlineClass: string;
  Logo: React.ComponentType<{ className?: string }>;
}

const companies: Record<CompanyName, CompanyInfo> = {
  hatch: {
    name: "Hatch Invest",
    description: "Jarden & FNZ Joint Venture",
    location: "Wellington, NZ",
    href: "https://www.hatchinvest.nz/",
    image: hatch,
    bgClass: "bg-hatch-purple",
    underlineClass: "after:bg-hatch-purple",
    Logo: HatchLogo
  },
  jarden: {
    name: "Jarden Direct",
    description: "Jarden",
    location: "Wellington, NZ",
    href: "https://www.jardendirect.co.nz/",
    image: jarden,
    bgClass: "bg-direct-green",
    underlineClass: "after:bg-direct-green",
    Logo: JardenLogo
  },
  hortplus: {
    name: "SprayPlan Manager",
    description: "HortPlus",
    location: "Hawkes Bay, NZ (Remote)",
    href: "https://www.hortplus.com/spray-plan-manager/",
    image: hortplus,
    bgClass: "bg-hortplus-blue",
    underlineClass: "after:bg-hortplus-blue",
    Logo: HortplusLogo
  }
};

const ExperienceCard = ({ companyName }: { companyName: CompanyName }) => {
  const { name, description, location, href, image, bgClass, underlineClass, Logo } =
    companies[companyName];

  return (
    <section>
      <WobbleCard href={href} containerClassName={`w-full sm:h-56 drop-shadow-md ${bgClass}`}>
        <Image
          className="absolute top-10 -right-8 rounded-lg object-contain"
          src={image}
          width={500}
          height={500}
          alt={`${companyName} screenshot`}
        />
      </WobbleCard>

      <div className="mx-2 mt-2 flex flex-col space-y-1.5">
        <div>
          <p className="text-sm leading-tight font-medium tracking-tight text-gray-800">
            {description}
          </p>
          <p className="text-xs tracking-tight text-slate-500">{location}</p>
        </div>

        <ExternalLink href={href}>
          <div
            className={`slide-in-underline -ml-1 flex w-fit items-center space-x-1.5 ${underlineClass}`}
          >
            <Logo className="h-5 w-5" />
            <h6 className="text-xl font-semibold tracking-tighter">
              {name}
              <CircleArrowRight className="mb-0.5 inline-flex h-[1em] pl-1" strokeWidth="2.5px" />
            </h6>
          </div>
        </ExternalLink>
      </div>
    </section>
  );
};

export default ExperienceCard;

import MadeInWellingtonBadge from "@/components/icons/MadeInWellingtonBadge";

import Image from "next/image";
import bus from "./bus-placeholder.png";

import { GitHub, Linkedin, ExternalLink as ExternalLinkIcon } from "react-feather";
import FlagNZ from "@/components/icons/FlagNZ";
import BrowserWindow from "@/components/BrowserWindow";
import JardenLogo from "@/components/icons/JardenLogo";
import HatchLogo from "@/components/icons/HatchLogo";
import HortPlusLogo from "@/components/icons/HortPlusLogo";
import ExternalLink from "@/components/ExternalLink";
import BadgeList from "@/components/BadgeList";

export default function Home() {
  return (
    <main>
      <nav
        id="nav-bar"
        className="z-10 bg-gradient-to-b from-floral-white h-14 fixed top-0 bottom-auto left-0 right-0 shadow-md"
      >
        <div className="max-w-[90%] m-auto h-full px-5 flex justify-between items-center">
          <span>bhavit</span>
          <div className="flex gap-5">
            <button className="p-2 pb-1.5">
              <ExternalLink href="https://www.linkedin.com/in/bhavit-wadhwa/">
                <Linkedin size={22} strokeWidth="1.5px" />
              </ExternalLink>
            </button>

            <button className="p-2 pb-1.5">
              <ExternalLink href="https://github.com/wa-bha">
                <GitHub size={24} strokeWidth="1.5px" />
              </ExternalLink>
            </button>
          </div>
        </div>
      </nav>

      <header
        id="hero-section"
        className="relative mb-10 md:mb-20 h-svh w-full flex justify-center items-center overflow-hidden"
      >
        <div className="pb-10 flex items-center justify-center flex-col">
          <h1 className="font-family text-[10vw] md:text-[5.4em]">
            <ExternalLink href="https://en.wikipedia.org/wiki/Flat_white">
              Bhavit Wadhwa
            </ExternalLink>
          </h1>

          <div className="px-10 md:pt-4 md:px-2 md:w-[48rem]">
            <p className="align-baseline font-light text-center w-full text-[3.5vw] md:text-[2em] md:leading-tight">
              experienced software developer based in wellington
              <FlagNZ className="mx-1 md:ml-2 inline-flex h-[1em]" />
              skilled in front-end frameworks
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 animate-spin-slow">
          <MadeInWellingtonBadge className="w-28 md:w-32 lg:w-36" />
        </div>
      </header>

      <section id="experience" className="my-10 md:my-20 max-w-[90%] m-auto">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <BrowserWindow sectionName="experience">
            <article className="p-2 flex gap-2">
              <JardenLogo className="flex-none w-10 h-10" />

              <div className="flex flex-col">
                <header>
                  <h5 className="text-lg font-semibold leading-tight">
                    <ExternalLink href="https://www.linkedin.com/in/bhavit-wadhwa/#experience">
                      Jarden
                    </ExternalLink>
                  </h5>

                  <div className="text-gray-500 text-sm tracking-tighter">
                    <p className="font-light">
                      Wellington, NZ • Full-time • November 2021 → Present (2 years, 7 months)
                    </p>
                  </div>
                </header>

                <div className="pt-4 flex flex-col gap-y-5">
                  <section className="flex gap-x-2">
                    <HatchLogo className="flex-none w-6 h-6" />

                    <div className="mt-[-0.25rem]">
                      <div className="flex flex-wrap items-center gap-x-1.5">
                        <h6 className="font-medium leading-tight">Hatch Invest team</h6>

                        <ExternalLink className="text-slate-50" href="https://www.hatchinvest.nz/">
                          <span className="rounded-sm px-1 py-0.5 bg-hatch-purple/70 text-xs font-medium">
                            hatchinvest.nz ↗
                          </span>
                        </ExternalLink>
                      </div>
                      <p className="text-sm">Software Engineer</p>

                      <BadgeList
                        badges={[
                          "React",
                          "Ruby on Rails",
                          "Javascript",
                          "Scss CSS",
                          "Vitest",
                          "Recharts"
                        ]}
                        variant="hatch"
                      />
                    </div>
                  </section>

                  <section className="flex gap-x-2">
                    <JardenLogo
                      className="flex-none w-6 h-6"
                      fillColor="#FFFFFF"
                      backgroundColor="#28A47D"
                    />

                    <div className="mt-[-0.25rem]">
                      <div className="flex flex-wrap items-center gap-x-1.5">
                        <h6 className="font-medium leading-tight">Direct Wealth team</h6>

                        <ExternalLink
                          className="text-slate-50"
                          href="https://www.jardendirect.co.nz/"
                        >
                          <span className="rounded-sm px-1 py-0.5 bg-direct-green/70 text-xs font-medium">
                            jardendirect.co.nz ↗
                          </span>
                        </ExternalLink>
                      </div>
                      <p className="text-sm">Software Engineer</p>

                      <BadgeList
                        badges={[
                          "React",
                          "Typescript",
                          "Tailwind",
                          "Apollo GraphQL",
                          "Jest",
                          "React-financial-charts"
                        ]}
                        variant="jarden"
                      />
                    </div>
                  </section>
                </div>
              </div>
            </article>
          </BrowserWindow>

          <BrowserWindow sectionName="projects">
            <div className="flex flex-col gap-3">
              <article className="m-2 flex gap-2">
                <HortPlusLogo className="flex-none w-10 h-10" />

                <header>
                  <div className="mt-[-0.25rem] flex flex-wrap items-start gap-x-1.5">
                    <h5 className="pt-0.5 text-lg font-semibold leading-tight">HortPlus</h5>

                    <ExternalLink className="text-slate-50" href="https://www.hortplus.com/">
                      <span className="rounded-sm px-1 py-0.5 bg-hortplus-blue/70 text-xs font-medium">
                        hortplus.com ↗
                      </span>
                    </ExternalLink>
                    <ExternalLink className="text-slate-50" href="https://sprayplan.nz/">
                      <span className="rounded-sm px-1 py-0.5 bg-hortplus-blue/70 text-xs font-medium">
                        sprayplan.nz ↗
                      </span>
                    </ExternalLink>
                  </div>

                  <div className="text-gray-500 text-sm tracking-tighter">
                    <p className="font-light">
                      Hawkes Bay, NZ • Remote • August 2021 → November 2021 (3 months)
                    </p>
                  </div>

                  <BadgeList
                    badges={["React", "Typescript", "CSS", "Bootstrap", "MapboxGL JS"]}
                    variant="hortplus"
                  />
                </header>
              </article>

              {/* Personal website */}
              {/* <article className="m-2 flex gap-2">
                <HortPlusLogo className="flex-none w-10 h-10" />

                <header>
                  <h5 className="text-lg font-semibold leading-tight">
                    <ExternalLink href="https://www.linkedin.com/in/bhavit-wadhwa/#projects">
                      Personal Website
                    </ExternalLink>
                  </h5>

                  <div className="pt-1.5 flex flex-wrap gap-x-1 gap-y-1 *:bg-green-yellow *:text-black">
                    <Badge>NextJS</Badge>
                    <Badge>React</Badge>
                    <Badge>shadcn/ui</Badge>
                  </div>
                </header>
              </article> */}
            </div>
          </BrowserWindow>
        </div>
      </section>

      <footer className="shadow-inner">
        <div className="px-5 max-w-[90%] m-auto h-full flex flex-col justify-between gap-8">
          <div className="pt-4 flex justify-between items-center">
            <button className="px-1.5 py-0.5">
              <ExternalLink href="https://v1.bhavit.dev">
                <ExternalLinkIcon className="pr-1 pb-1 inline-flex" size={20} strokeWidth="1.5px" />
                <span className="font-medium">v1</span>
              </ExternalLink>
            </button>

            <p className="font-medium">{new Date().getFullYear()}</p>
          </div>

          {/* Wellington bus */}
          <div className="pl-2.5 flex justify-center">
            <Image src={bus} width={450} height={500} alt="bus" />
          </div>
        </div>
      </footer>
    </main>
  );
}

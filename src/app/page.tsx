import MadeInWellingtonBadge from "@/components/icons/MadeInWellingtonBadge";

import Image from "next/image";
import bus from "./bus-placeholder.png";

import { GitHub, Linkedin, ExternalLink } from "react-feather";
import FlagNZ from "@/components/icons/FlagNZ";
import BrowserWindow from "@/components/BrowserWindow";
import JardenLogo from "@/components/icons/JardenLogo";
import HatchLogo from "@/components/icons/HatchLogo";
import HortPlusLogo from "@/components/icons/HortPlusLogo";

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
              <a
                href="https://www.linkedin.com/in/bhavit-wadhwa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={22} strokeWidth="1.5px" />
              </a>
            </button>

            <button className="p-2 pb-1.5">
              <a href="https://github.com/wa-bha" target="_blank" rel="noopener noreferrer">
                <GitHub size={24} strokeWidth="1.5px" />
              </a>
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
            <a
              href="https://en.wikipedia.org/wiki/Flat_white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bhavit Wadhwa
            </a>
          </h1>

          <div className="px-10 md:pt-4 md:px-2 md:w-[48rem]">
            <p className="align-baseline font-light text-center w-full text-[3.5vw] md:text-[2em] md:leading-tight">
              experienced software developer based in wellington
              <FlagNZ className="mx-1 md:ml-2 inline-flex h-[1em]" />
              skilled in front-end frameworks
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 leading-tight text-sm md:text-base">
          <p className="font-medium tracking-wide">coming soon...</p>
          <p className="font-light text-grey tracking-wide">projects and experience section</p>
        </div>

        <div className="absolute bottom-[6rem] md:bottom-10 right-10 animate-spin-slow">
          <MadeInWellingtonBadge className="w-20 md:w-[8em]" />
        </div>
      </header>

      {/* Experience -> Jarden { Direct, and then Hatchinvest } */}
      <section id="experience" className="my-10 md:my-20 max-w-[90%] m-auto">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <BrowserWindow sectionName="experience">
            <div className="flex flex-col gap-3">
              <article className="p-2">
                <div className="flex gap-2">
                  <JardenLogo className="flex-none w-10 h-10" />
                  <div className="flex flex-col gap-5">
                    <header>
                      <h5>
                        <a href="https://www.linkedin.com/in/bhavit-wadhwa/#experience">Jarden</a>
                      </h5>

                      <p className="text-gray-500 text-sm font-semibold tracking-tighter">
                        <span>November 2021 → Present (2 years, 5 months)</span>
                        <span className="font-semibold">{" • "}</span>
                        <span className="font-light">Wellington, NZ</span>
                        <span className="font-semibold">{" • "}</span>
                        <span className="font-light">Full-time</span>
                      </p>
                    </header>

                    <section className="flex gap-2">
                      <HatchLogo className="flex-none w-6 h-6" />

                      <div>
                        <h6 className="font-medium">Hatch Invest team</h6>
                        <p className="text-xs">Software Engineer</p>
                      </div>
                    </section>

                    <section className="flex gap-2">
                      <JardenLogo
                        className="flex-none w-6 h-6"
                        fillColor="#FFFFFF"
                        backgroundColor="#28A47D"
                      />

                      <div>
                        <h6 className="font-medium">Direct Wealth team</h6>
                        <p className="text-xs">Software Engineer</p>
                      </div>
                    </section>
                  </div>
                </div>
              </article>
            </div>
          </BrowserWindow>

          <BrowserWindow sectionName="projects">
            <div className="flex flex-col gap-3">
              <article className="p-2">
                <div className="flex gap-2">
                  <HortPlusLogo className="flex-none w-10 h-10" />
                  <div className="flex flex-col gap-5">
                    <header>
                      <h5>
                        <a href="https://www.linkedin.com/in/bhavit-wadhwa/#projects">HortPlus</a>
                      </h5>

                      <p className="text-gray-500 text-sm font-semibold tracking-tighter">
                        <span>August 2021 → November 2021 (3 months)</span>
                        <span className="font-semibold">{" • "}</span>
                        <span className="font-light">Hawkes Bay, NZ</span>
                        <span className="font-semibold">{" • "}</span>
                        <span className="font-light">Remote</span>
                      </p>
                    </header>
                  </div>
                </div>
              </article>

              <article className="p-2">
                <div className="flex gap-2">
                  <div className="bg-green-yellow rounded-full w-10 h-10" />
                  <div className="flex flex-col gap-5">
                    <header>
                      <h5>Coming soon...</h5>

                      <p className="text-gray-500 text-sm font-semibold tracking-tighter">
                        <span>...new projects!</span>
                      </p>
                    </header>
                  </div>
                </div>
              </article>
            </div>
          </BrowserWindow>
        </div>
      </section>

      <footer className="shadow-inner">
        <div className="px-5 max-w-[90%] m-auto h-full flex flex-col justify-between gap-8">
          <div className="pt-4 flex justify-between items-center">
            <button className="px-1.5 py-0.5">
              <a href="https://v1.bhavit.dev" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="pr-1 pb-1 inline-flex" size={20} strokeWidth="1.5px" />
                <span className="font-medium">v1</span>
              </a>
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

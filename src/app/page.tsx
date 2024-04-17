import MadeInWellingtonBadge from "@/components/icons/MadeInWellingtonBadge";

import Image from "next/image";
import bus from "./bus-placeholder.png";

import { GitHub, Linkedin, ExternalLink } from "react-feather";
import FlagNZ from "@/components/icons/FlagNZ";

export default function Home() {
  return (
    <main>
      <nav id="nav-bar" className="z-10 h-14 fixed top-0 bottom-auto left-0 right-0 shadow-md">
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
        className="relative py-8 h-svh w-full flex justify-center items-center overflow-hidden"
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
              <FlagNZ className="mx-1 inline-flex h-[1em]" />
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

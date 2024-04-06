import MadeInWellingtonBadge from "@/components/icons/MadeInWellingtonBadge";

import { GitHub, Linkedin, ExternalLink } from "react-feather";
import FlagNZ from "@/components/icons/FlagNZ";

export default function Home() {
  return (
    <main>
      <nav id="nav-bar" className="z-10 h-14 fixed top-0 bottom-auto left-0 right-0 shadow-md">
        <div className="max-w-[88%] m-auto h-full px-5 flex justify-between items-center">
          <span>bhavit</span>
          <div className="flex gap-5">
            <a
              className="p-2 pb-1.5 shadow-inner rounded-md hover:shadow-md "
              href="https://www.linkedin.com/in/bhavit-wadhwa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} strokeWidth="1.5px" />
            </a>

            <a
              className="p-2 pb-1.5 shadow-inner rounded-lg hover:shadow-md "
              href="https://github.com/wa-bha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub size={24} strokeWidth="1.5px" />
            </a>
          </div>
        </div>
      </nav>

      <header
        id="hero-section"
        className="relative py-8 h-svh w-full flex justify-center items-center overflow-hidden"
      >
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-family text-[9vw] md:text-[5.4em]">Bhavit Wadhwa</h1>

          <div className="px-10 md:pt-4 md:px-2 md:w-[48rem]">
            <p className=" font-light text-center w-full text-[3.5vw] md:text-[2em] md:leading-tight">
              software developer specializing in front-end frameworks and design, based in
              wellington
              <FlagNZ className="pl-1.5 inline-flex h-[1em] align-text-bottom" />
            </p>
          </div>
        </div>

        <a
          className="absolute bottom-10 left-10 px-2.5 py-1 shadow-inner hover:shadow-md rounded-md"
          href="https://v1.bhavit.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="pr-1 inline-flex " size={20} strokeWidth="1.5px" />
          v1
        </a>

        <div className="absolute bottom-10 right-10 animate-spin-slow">
          <MadeInWellingtonBadge className="w-20 md:w-[8em]" />
        </div>
      </header>
    </main>
  );
}

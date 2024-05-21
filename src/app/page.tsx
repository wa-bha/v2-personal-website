import { GitHub, Linkedin, ExternalLink as ExternalLinkIcon } from "react-feather";

import MadeInWellingtonBadge from "@/components/icons/MadeInWellingtonBadge";
import FlagNZ from "@/components/icons/FlagNZ";
import ExternalLink from "@/components/ExternalLink";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  return (
    <main>
      <nav
        id="nav-bar"
        className="z-10 bg-gradient-to-b from-floral-white h-14 fixed top-0 bottom-auto left-0 right-0 shadow-md"
      >
        <div className="max-w-[90%] m-auto h-full px-5 flex items-center">
          <span>bhavit</span>
        </div>
      </nav>

      <header
        id="hero-section"
        className="relative mb-10 h-svh md:h-[85svh] w-full flex justify-center items-center overflow-hidden"
      >
        <div className="pb-10 md:pb-0 pt-12 flex items-center justify-center flex-col">
          <ExternalLink href="https://en.wikipedia.org/wiki/Flat_white">
            <h1 className="slide-in-underline after:bg-slate-blue after:bottom-[0.3em] after:h-[0.3em] font-family text-[10vw] md:text-[5.4em]">
              Bhavit Wadhwa
            </h1>
          </ExternalLink>

          <div className="px-10 md:pt-4 md:px-2 md:w-[48rem]">
            <p className="font-light text-center text-[5vw] md:text-[2em] md:leading-tight">
              experienced full-stack 👨🏽‍💻 software engineer, skilled in front-end frameworks
            </p>
          </div>

          <div className="pt-6 flex gap-5">
            <ExternalLink href="https://www.linkedin.com/in/bhavit-wadhwa/">
              <div className="slide-in-underline after:bg-slate-blue flex flex-nowrap items-center gap-1.5">
                <Linkedin className="mb-0.5" size={20} strokeWidth="2px" />
                <span className="font-medium">linkedin ↗</span>
              </div>
            </ExternalLink>

            <ExternalLink href="https://github.com/wa-bha">
              <div className="slide-in-underline after:bg-slate-blue flex flex-nowrap items-center gap-1.5">
                <GitHub className="mb-0.5" size={20} strokeWidth="2px" />
                <span className="font-medium">github ↗</span>
              </div>
            </ExternalLink>
          </div>
        </div>

        <div className="m-2 absolute bottom-6 right-6 md:bottom-0 animate-spin-slow drop-shadow-md">
          <MadeInWellingtonBadge className="w-28 md:w-32 lg:w-36" />
        </div>
      </header>

      <section
        id="experience"
        className="px-1 sm:px-5 my-10 md:mb-20 max-w-[90%] m-auto 2xl:flex 2xl:justify-center"
      >
        <div className="w-full max-w-6xl 2xl:max-w-2xl">
          <h2>Experience</h2>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-2 gap-x-4 gap-y-6">
            <ExperienceCard companyName="hatch" />
            <ExperienceCard companyName="jarden" />
            <ExperienceCard companyName="hortplus" />
          </div>
        </div>
      </section>

      <section
        id="bio"
        className="px-1 sm:px-5 my-10 md:my-20 max-w-[90%] m-auto 2xl:flex 2xl:justify-center"
      >
        <div className="max-w-2xl">
          <h2>Bio</h2>

          <div className="pt-8 font-satoshi md:text-lg flex flex-col gap-4">
            <p className="font-semibold align-baseline">
              I&apos;m a highly-motivated and driven software engineer, based in Wellington,
              <FlagNZ className="ml-1 mb-1 inline-flex h-[1.25em]" />. Collaborating with talented
              teams to turn design ideas into exceptional user experiences is something I find
              incredibly rewarding.
            </p>

            <p>
              At Hatch, I&apos;m helping build a new investing platform that expands access into new
              markets. Their mission resonates deeply with me: to make wealth generation more
              accessible for Kiwi investors.
            </p>

            <p>
              Outside of work, you&apos;ll likely find me exploring the beautiful landscapes of NZ.
              Whether it&apos;s carving through snow on a snowboard 🏂, hiking new trails or
              enjoying a game of field hockey, I love spending time outdoors.
            </p>
          </div>
        </div>
      </section>

      <footer className="shadow-inner">
        <div className="px-5 max-w-[90%] m-auto h-full flex flex-col justify-between gap-8">
          <div className="py-5 flex justify-between items-center">
            <ExternalLink href="https://v1.bhavit.dev">
              <button className="px-2 py-0.5">
                <ExternalLinkIcon className="pr-1 pb-1 inline-flex" size={22} strokeWidth="2.5px" />
                <span className="text-lg font-semibold">v1.0</span>
              </button>
            </ExternalLink>

            <p className="text-lg font-semibold">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

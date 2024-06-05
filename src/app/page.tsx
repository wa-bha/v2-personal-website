import { Github, Linkedin, CircleArrowRight, ExternalLinkIcon, Copyright } from "lucide-react";

import MadeInWellingtonBadge from "@/components/icons/MadeInWellingtonBadge";
import FlagNZ from "@/components/icons/FlagNZ";
import ExternalLink from "@/components/ExternalLink";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  return (
    <main>
      <header
        id="hero-section"
        className="relative mb-10 h-svh md:h-[100svh] w-full flex justify-center items-center overflow-hidden"
      >
        <div className="flex items-center justify-center flex-col">
          <ExternalLink href="https://en.wikipedia.org/wiki/Flat_white">
            <h1 className="text-[10vw] md:text-[6em]">Bhavit Wadhwa</h1>
          </ExternalLink>

          <div className="mt-0 sm:mt-[-1.25em] px-10 md:px-2 md:w-[48rem]">
            <p className="font-medium text-center text-[5vw] tracking-tight md:text-[1.9em] md:leading-tight">
              experienced software engineer based in wellington{" "}
              <FlagNZ className="mb-1 inline-flex h-[1em]" />, skilled in front-end frameworks
            </p>
          </div>

          <div className="pt-[1em] flex flex-wrap justify-center gap-y-2 md:gap-x-5">
            <ExternalLink href="https://www.linkedin.com/in/bhavit-wadhwa/">
              <div className="slide-in-underline after:bg-slate-blue flex flex-nowrap items-center">
                <Linkedin className="h-[1em]" strokeWidth="2.1px" />
                <span className="font-semibold text-sm md:text-lg">linkedin</span>
                <CircleArrowRight className="h-[1em]" strokeWidth="2.5px" />
              </div>
            </ExternalLink>

            <ExternalLink href="https://github.com/wa-bha">
              <div className="slide-in-underline after:bg-slate-blue flex flex-nowrap items-center">
                <Github className="h-[1em]" strokeWidth="2.3px" />
                <span className="font-semibold text-sm md:text-lg">github</span>
                <CircleArrowRight className="h-[1em]" strokeWidth="2.5px" />
              </div>
            </ExternalLink>
          </div>
        </div>

        <div className="m-2 absolute bottom-6 right-6">
          <MadeInWellingtonBadge className="w-28 md:w-32 lg:w-36 drop-shadow-md" />
        </div>
      </header>

      <section
        id="experience"
        className="px-1 sm:px-5 my-10 md:mb-24 max-w-[90%] m-auto 2xl:flex 2xl:justify-center"
      >
        <div className="w-full max-w-6xl 2xl:max-w-2xl">
          <h2>Experience</h2>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-2 gap-x-4 gap-y-6">
            <ExperienceCard companyName="hatch" />
            <ExperienceCard companyName="jarden" />
            <ExperienceCard companyName="hortplus" />
          </div>
        </div>
      </section>

      <section
        id="bio"
        className="px-1 sm:px-5 my-10 md:my-24 max-w-[90%] m-auto 2xl:flex 2xl:justify-center"
      >
        <div className="max-w-2xl">
          <h2>Bio</h2>

          <div className="pt-6 font-satoshi md:text-lg flex flex-col gap-4">
            <p className="font-semibold tracking-[-0.015em]">
              I am a highly-motivated and driven full-stack software engineer 👨🏽‍💻, working in the
              fin-tech space. Collaborating with talented teams to transform design ideas into
              exceptional user experiences is something I find incredibly rewarding.
            </p>

            <p>
              At{" "}
              <ExternalLink href="https://www.hatchinvest.nz/" className="w-fit inline-flex">
                <span className="heavy-underline after:bg-slate-blue">Hatch</span>
              </ExternalLink>
              , I&apos;m helping build a new investing platform that expands access into new
              markets. Their mission resonates deeply with me: to make wealth generation more
              accessible for all Kiwi investors.
            </p>

            <p>
              Outside of work, you&apos;ll often find me exploring the beautiful landscapes of NZ.
              Whether it&apos;s carving through snow on a snowboard 🏂, hiking new trails or playing
              a game of field hockey, I love spending time outdoors.
            </p>
          </div>
        </div>
      </section>

      <footer className="shadow-inner font-nohemi text-lg font-medium">
        <div className="px-5 max-w-[90%] m-auto h-full flex flex-col justify-between gap-8">
          <div className="py-5 flex justify-between items-center">
            <ExternalLink href="https://v1.bhavit.dev">
              <button className="px-2 py-0.5">
                <ExternalLinkIcon
                  className="pr-0.5 pb-0.5 inline-flex h-[1.1em]"
                  strokeWidth="2.5px"
                />
                <span>v1.0</span>
              </button>
            </ExternalLink>

            <p>
              <Copyright className="pr-0.5 pb-0.5 inline-flex h-[1.1em]" strokeWidth="3px" />
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

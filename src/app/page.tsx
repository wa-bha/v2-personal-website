import { GitHub, Linkedin, ExternalLink as ExternalLinkIcon } from "react-feather";

import MadeInWellingtonBadge from "@/components/icons/MadeInWellingtonBadge";
import FlagNZ from "@/components/icons/FlagNZ";
import ExternalLink from "@/components/ExternalLink";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";

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
        className="relative mb-10 md:mb-20 h-svh md:h-[85svh] w-full flex justify-center items-center overflow-hidden"
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

      <section
        id="experience"
        className="px-1 sm:px-5 my-10 md:my-20 max-w-[90%] m-auto 2xl:flex 2xl:justify-center"
      >
        <div className="max-w-2xl">
          <h2 className="font-satoshi text-2xl font-semibold">Experience</h2>

          <div className="pt-8 flex flex-wrap lg:flex-nowrap 2xl:flex-wrap gap-4">
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
          <h2 className="font-satoshi text-2xl font-semibold">Bio</h2>

          <div className="pt-8 font-satoshi md:text-lg">
            <p className="font-semibold">
              I'm passionate about turning design ideas into exceptional user experiences.
              Collaborating with talented teams to bring these concepts to life is something I find
              incredibly rewarding.
            </p>

            <p className="pt-4">
              At Hatch, I'm helping build a new investing platform that expands access into new
              markets. Their mission deeply resonates with me: to make wealth generation more
              accessible for Kiwi investors.
            </p>

            <p className="pt-4">
              Outside of work, you'll likely find me exploring the beautiful landscapes of NZ.
              Whether it's carving through snow on a snowboard 🏂, hiking new trails or enjoying a
              game of field hockey, I love spending time outdoors.
            </p>
          </div>
        </div>
      </section>

      <footer className="shadow-inner">
        <div className="px-5 max-w-[90%] m-auto h-full flex flex-col justify-between gap-8">
          <div className="py-5 flex justify-between items-center">
            <button className="px-1.5 py-0.5">
              <ExternalLink href="https://v1.bhavit.dev">
                <ExternalLinkIcon className="pr-1 pb-1 inline-flex" size={20} strokeWidth="1.5px" />
                <span className="text-lg font-semibold">v1</span>
              </ExternalLink>
            </button>

            <p className="text-lg font-semibold">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { ExternalLinkIcon, Copyright, SquareDashedMousePointer } from "lucide-react";

import { ExternalLink, ExperienceCard, StaggeredHeroSection } from "@/components";
import { MadeInWellingtonBadge } from "@/components/icons";

export default function Home() {
  return (
    <main>
      <header
        id="hero-section"
        className="relative mb-10 h-svh w-full overflow-hidden md:h-[100svh]"
      >
        <StaggeredHeroSection />

        <div className="absolute bottom-6 right-6 m-2">
          <MadeInWellingtonBadge className="w-28 drop-shadow-md md:w-32 lg:w-36" />
        </div>
      </header>

      <section
        id="experience"
        className="m-auto my-10 max-w-[90%] px-1 sm:px-5 md:mb-24 2xl:flex 2xl:justify-center"
      >
        <div className="w-full max-w-6xl 2xl:max-w-2xl">
          <div className="flex items-baseline">
            <h2>Experience</h2>
            <div className="hidden items-center pl-4 lg:flex">
              <SquareDashedMousePointer className="h-[1.1em]" strokeWidth="2px" />
              <span className="pl-0.5 font-medium">hover</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-6 pt-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-2">
            <ExperienceCard companyName="hatch" />
            <ExperienceCard companyName="jarden" />
            <ExperienceCard companyName="hortplus" />
          </div>
        </div>
      </section>

      <section
        id="bio"
        className="m-auto my-10 max-w-[90%] px-1 sm:px-5 md:my-24 2xl:flex 2xl:justify-center"
      >
        <div className="max-w-2xl">
          <h2>Bio</h2>

          <div className="flex flex-col gap-4 pt-6 font-satoshi md:text-lg">
            <p className="font-semibold tracking-[-0.015em]">
              I am a highly-motivated and driven full-stack software engineer 👨🏽‍💻, working in the
              fin-tech space. Collaborating with talented teams to transform design ideas into
              exceptional user experiences is something I find incredibly rewarding.
            </p>

            <p>
              At{" "}
              <ExternalLink href="https://www.hatchinvest.nz/" className="inline-flex w-fit">
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

      <footer className="font-nohemi text-lg font-medium shadow-inner">
        <div className="m-auto flex h-full max-w-[90%] flex-col justify-between gap-8 px-5">
          <div className="flex items-center justify-between py-5">
            <ExternalLink href="https://v1.bhavit.dev">
              <button className="px-2 py-0.5">
                <ExternalLinkIcon
                  className="inline-flex h-[1.1em] pb-0.5 pr-0.5"
                  strokeWidth="2.5px"
                />
                <span>v1.0</span>
              </button>
            </ExternalLink>

            <p>
              <Copyright className="inline-flex h-[1.1em] pb-0.5 pr-0.5" strokeWidth="3px" />
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

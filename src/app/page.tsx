import { Footer } from "@/components/layout";
import { HeroSection, BioSection, ExperienceSection } from "@/components/sections";
import { MadeInWellingtonBadge } from "@/components/icons";

export default function Home() {
  return (
    <main>
      <header id="#" className="relative mb-10 h-svh w-full overflow-hidden md:h-svh">
        <HeroSection />
        <div className="absolute right-6 bottom-6 m-2">
          <MadeInWellingtonBadge className="w-28 drop-shadow-md md:w-32 lg:w-36" />
        </div>
      </header>

      <section className="m-auto my-10 max-w-[90%] px-1 sm:px-5 md:mb-24 2xl:flex 2xl:justify-center">
        <div className="w-full max-w-6xl 2xl:max-w-2xl">
          <h2 id="experience">Experience</h2>
          <ExperienceSection />
        </div>
      </section>

      <section className="m-auto my-10 max-w-[90%] px-1 sm:px-5 md:my-24 2xl:flex 2xl:justify-center">
        <div className="max-w-2xl">
          <h2 id="bio">Bio</h2>
          <BioSection />
        </div>
      </section>

      <Footer />
    </main>
  );
}

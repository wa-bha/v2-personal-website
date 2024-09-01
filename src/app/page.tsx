import { Footer } from "@/components/layout";
import { HeroSection, BioSection, ExperienceSection } from "@/components/sections";
import { MadeInWellingtonBadge } from "@/components/icons";

export default function Home() {
  return (
    <main>
      <header className="relative mb-10 h-svh w-full overflow-hidden md:h-[100svh]">
        <HeroSection />
        <div className="absolute bottom-6 right-6 m-2">
          <MadeInWellingtonBadge className="w-28 drop-shadow-md md:w-32 lg:w-36" />
        </div>
      </header>

      <section className="m-auto my-10 max-w-[90%] px-1 sm:px-5 md:mb-24 2xl:flex 2xl:justify-center">
        <div className="w-full max-w-6xl 2xl:max-w-2xl">
          <h2>Experience</h2>
          <ExperienceSection />
        </div>
      </section>

      <section className="m-auto my-10 max-w-[90%] px-1 sm:px-5 md:my-24 2xl:flex 2xl:justify-center">
        <div className="max-w-2xl">
          <h2>Bio</h2>
          <BioSection />
        </div>
      </section>

      <Footer />
    </main>
  );
}

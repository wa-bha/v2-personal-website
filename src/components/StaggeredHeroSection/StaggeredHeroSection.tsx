"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, CircleArrowRight } from "lucide-react";

import ExternalLink from "../ExternalLink";
import { FlagNZ } from "../icons";

const StaggeredHeroSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  const variants = (startingHeight: number) => {
    return {
      hidden: { opacity: 0, y: startingHeight },
      visible: { opacity: 1, y: 0 }
    };
  };

  return (
    <section className="flex h-full flex-col items-center justify-center">
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={variants(40)}
        transition={{
          delay: 0.3,
          duration: 1.4,
          ease: "easeInOut"
        }}
      >
        <ExternalLink href="https://en.wikipedia.org/wiki/Flat_white">
          <h1 className="text-center text-[10vw] md:text-[6em]">Bhavit Wadhwa</h1>
        </ExternalLink>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={variants(30)}
        transition={{
          delay: 1.2,
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <div className="mt-[-0.5rem] px-10 sm:mt-[-1.25em] md:w-[48rem] md:px-2">
          <p className="text-center text-[5.5vw] font-medium tracking-tight sm:text-[1.85em] md:leading-tight">
            experienced software engineer based in wellington{" "}
            <FlagNZ className="mb-1 inline-flex h-[1em]" />, skilled in full-stack development
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={variants(20)}
        transition={{
          delay: 1.7,
          duration: 0.9,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 pt-[1em] font-bold tracking-tight md:gap-x-5 md:text-lg">
          <ExternalLink href="https://www.linkedin.com/in/bhavit-wadhwa/">
            <div className="slide-in-underline flex flex-nowrap items-center after:bg-blue-500">
              <Linkedin className="h-[1.2em] pb-0.5 pr-0.5 text-blue-600" strokeWidth="2.5px" />
              <span>linkedin</span>
              <CircleArrowRight className="h-[1em]" strokeWidth="2.5px" />
            </div>
          </ExternalLink>

          <ExternalLink href="https://github.com/wa-bha">
            <div className="slide-in-underline flex flex-nowrap items-center after:bg-purple-600">
              <Github className="h-[1.2em] pr-0.5 text-purple-700" strokeWidth="2.3px" />
              <span>github</span>
              <CircleArrowRight className="h-[1em]" strokeWidth="2.5px" />
            </div>
          </ExternalLink>
        </div>
      </motion.div>
    </section>
  );
};

export default StaggeredHeroSection;

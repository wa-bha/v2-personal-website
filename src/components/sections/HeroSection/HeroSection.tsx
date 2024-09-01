"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, CircleArrowRight } from "lucide-react";
import { ExternalLink, TextEffect } from "@/components/common";

const HeroSection = () => {
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
    <div className="flex h-full flex-col items-center justify-center">
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
        <ExternalLink href="https://en.wikipedia.org/wiki/Flat_white#:~:text=originates from Wellington">
          <h1 className="text-center text-[10vw] md:text-[6em]">Bhavit Wadhwa</h1>
        </ExternalLink>
      </motion.div>

      <div className="mt-[-0.5rem] px-10 sm:mt-[-1.25em] md:w-[48rem] md:px-2">
        <TextEffect
          per="word"
          as="h3"
          preset="blur"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 1.4 } }
            }
          }}
          className="text-center text-[5.5vw] font-medium tracking-tight sm:text-[1.85em] md:leading-tight"
        >
          experienced software engineer based in wellington, skilled in full-stack development
        </TextEffect>
      </div>

      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={variants(20)}
        transition={{
          delay: 2.5,
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
    </div>
  );
};

export default HeroSection;

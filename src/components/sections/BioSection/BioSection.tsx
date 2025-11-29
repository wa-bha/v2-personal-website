"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, InView } from "@/components/common";
import { FlagNZ } from "@/components/icons";

const paragraphVariants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)"
  }
};

const BioSection = () => {
  return (
    <InView
      viewOptions={{ once: true, margin: "0px 0px -200px 0px" }}
      variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
            ease: "easeInOut"
          }
        }
      }}
    >
      <div className="flex flex-col pt-6 font-satoshi md:text-lg">
        <motion.p
          variants={paragraphVariants}
          transition={{ duration: 0.5 }}
          className="mb-4 font-semibold tracking-[-0.02em]"
        >
          Full-stack developer 👨‍💻 with strong domain expertise in the fin-tech sector and a knack
          for crafting clean, functional user experiences. I enjoy working alongside talented teams
          on turning design ideas into exceptional products.
        </motion.p>

        <motion.p variants={paragraphVariants} transition={{ duration: 0.6 }} className="mb-4">
          At{" "}
          <ExternalLink href="https://www.hatchinvest.nz/" className="inline-flex w-fit">
            <span className="font-bold text-hatch-purple hover:underline hover:decoration-hatch-purple hover:decoration-[3px] hover:underline-offset-2">
              Hatch
            </span>
          </ExternalLink>
          , I&apos;m proud to be part of a team building secure and scalable apps. We&apos;re on a
          mission to make wealth generation simpler and more accessible for everyone - building a
          platform that provides Kiwi investors 💸 with greater access to global markets.
        </motion.p>

        <motion.p variants={paragraphVariants} transition={{ duration: 0.9 }} className="mb-4">
          Outside of coding, I&apos;m usually exploring New Zealand{" "}
          <FlagNZ className="mb-1 inline-flex h-[1em]" /> (and the 🌏) — whether it&apos;s out on a
          snowboard, hiking new trails or playing field hockey. I love just embracing new adventures
          and my free time spending time outdoors.
        </motion.p>
      </div>
    </InView>
  );
};

export default BioSection;

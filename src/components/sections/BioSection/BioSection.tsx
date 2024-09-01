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
          {/* I make websites beautiful, blending design and functionality to create exceptional user
          experiences. I&apos;m passionate about collaborating with outstanding teams and
          design-focused businesses, especially those driving positive change through innovative
          solutions.  */}
          I&apos;m a developer who&apos;s all about crafting beautiful websites. I love merging
          design and functionality to create exceptional user experiences that people genuinely
          enjoy. I&apos;m passionate about working with outstanding teams and design-focused
          businesses that are driving positive change.
        </motion.p>

        <motion.p variants={paragraphVariants} transition={{ duration: 0.6 }} className="mb-4">
          At{" "}
          <ExternalLink href="https://www.hatchinvest.nz/" className="inline-flex w-fit">
            <span className="heavy-underline after:bg-slate-blue">Hatch</span>
          </ExternalLink>
          , I&apos;m proud to contribute to a platform that opens new investment opportunities,
          making wealth generation more accessible for Kiwi investors 💸. Their mission to empower
          everyday people resonates deeply with me.
        </motion.p>

        <motion.p variants={paragraphVariants} transition={{ duration: 0.9 }} className="mb-4">
          Beyond coding, you&apos;ll find me enjoying the outdoors in New Zealand{" "}
          <FlagNZ className="mb-1 inline-flex h-[1em]" /> — whether it&apos;s carving through snow
          on a snowboard 🏂, hiking new trails or playing field hockey, I love spending time
          outdoors.
        </motion.p>
      </div>
    </InView>
  );
};

export default BioSection;

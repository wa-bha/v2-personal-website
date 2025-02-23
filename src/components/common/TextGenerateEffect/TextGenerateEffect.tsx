"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  textClassname?: string;
  filter?: boolean;
  duration?: number;
  startDelay?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  textClassname,
  filter = true,
  duration = 0.5,
  startDelay = 1
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none"
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2, { startDelay })
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0 dark:text-white"
              style={{
                filter: filter ? "blur(10px)" : "none"
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-1">
        <div className={textClassname}>{renderWords()}</div>
      </div>
    </div>
  );
};

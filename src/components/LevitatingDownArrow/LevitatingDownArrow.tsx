"use client";

import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

const LevitatingDownArrow = () => {
  return (
    <motion.div
      initial={{ y: -2 }}
      animate={{ y: -8 }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut"
      }}
    >
      <MoveDown
        className="text-gray-500 md:ml-[-0.5rem]"
        width="32"
        height="32"
        strokeWidth="1.2px"
      />
    </motion.div>
  );
};

export default LevitatingDownArrow;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { heroAnimationVariants } from "./helpers";

const Hero = () => {
  return (
    <div className="flex flex-col leading-tight">
      <motion.span
        className="text-[200px]"
        variants={heroAnimationVariants}
        initial="initialLeft"
        animate="animateLeft"
      >
        Priyana
      </motion.span>
      <motion.span
        className="text-[200px] text-right"
        variants={heroAnimationVariants}
        initial="initialRight"
        animate="animateRight"
      >
        Kale
      </motion.span>
    </div>
  );
};

export default Hero;

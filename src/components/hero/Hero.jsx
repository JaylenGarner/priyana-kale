"use client";

import React from "react";
import { motion } from "framer-motion";
import { heroAnimationVariants } from "./helpers";

const Hero = ({ firstWord, secondWord }) => {
  return (
    <div className="flex flex-col leading-tight ">
      <motion.span
        className="text-[200px] text-slate-900"
        variants={heroAnimationVariants}
        initial="initialLeft"
        animate="animateLeft"
      >
        {firstWord}
      </motion.span>
      <motion.span
        className="text-[200px] text-right text-[#20603D]"
        variants={heroAnimationVariants}
        initial="initialRight"
        animate="animateRight"
      >
        {secondWord}
      </motion.span>
    </div>
  );
};

export default Hero;

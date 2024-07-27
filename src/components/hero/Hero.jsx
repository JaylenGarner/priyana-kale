"use client";

import React from "react";
import { motion } from "framer-motion";
import { heroAnimationVariants } from "./helpers";

const Hero = ({ firstWord, secondWord }) => {
  return (
    <div className="flex flex-col leading-tight ">
      <motion.span
        className="hero_text text-slate-900"
        variants={heroAnimationVariants}
        initial="initialLeft"
        animate="animateLeft"
      >
        {firstWord}
      </motion.span>
      <motion.span
        className="hero_text text-right text-[#20603D]"
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

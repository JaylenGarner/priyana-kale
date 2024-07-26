"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutAnimationVariants } from "./helpers";

const About = () => {
  return (
    <motion.div
      variants={aboutAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </motion.div>
  );
};

export default About;

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
        As a passionate marketing professional with expertise in SEO, digital
        marketing, and content creation, I thrive on crafting strategies that
        elevate brand visibility and engage audiences. With a blend of creative
        storytelling and data-driven insights, I deliver impactful campaigns
        that resonate. I'm committed to continuous learning and staying ahead of
        industry trends, bringing fresh perspectives to every project. Outside
        of work, I enjoy traveling and exploring new cultures, which inspires my
        innovative approach to marketing. Let's connect and achieve your
        marketing goals together!
      </p>
    </motion.div>
  );
};

export default About;

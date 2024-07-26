"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navigationAnimationVariants } from "./helpers";
import { pages } from "@/components/navigation/helpers";

const Navigation = () => {
  return (
    <motion.nav
      className="navigation"
      variants={navigationAnimationVariants}
      initial="initial"
      animate="animate"
    >
      <span className="text-3xl italic">P.K.</span>
      <div className="space-x-6 ">
        {pages.map((page) => {
          return (
            <Link href={`${page.link}`} key={page.name}>
              {page.name}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navigation;

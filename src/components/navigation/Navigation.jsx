"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navigationAnimationVariants } from "./helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {
  return (
    <motion.nav
      className="navigation"
      variants={navigationAnimationVariants}
      initial="initial"
      animate="animate"
    >
      <Link href={"/"} className="initials">
        P.K.
      </Link>
      <div className="space-x-6 text-slate-900 text-lg">
        <Link href={`/`} className="link_hover">
          About
        </Link>
        <Link
          href={`https://priyana-kale.s3.amazonaws.com/Public/Assets/resume.pdf`}
          target="_blank"
          className="link_hover"
        >
          Resume
        </Link>
        <Link href={`/contact-me`} className="link_hover">
          Contact
        </Link>
      </div>
      <Link href={"https://www.linkedin.com/in/priyana-kale/"} target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2xl"
          color="#0966C2"
          className="link_hover"
        />
      </Link>
    </motion.nav>
  );
};

export default Navigation;

import React from "react";

import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.h2
        className="page-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        ABOUT ME
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
      >
        <p className="page-content">
          Greetings! My name is Ryan Tixier (last name prounounced T-C-A); I am
          a full-stack web developer, space nerd, and proud owner of a...
          hybrid. Welcome to my ever-evolving portfolio! I hope you enjoy
          exploring everything it has to offer.
        </p>
      </motion.div>
    </>
  );
}

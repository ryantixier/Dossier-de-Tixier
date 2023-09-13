import React from "react";
import resume from "../assets/RT-Resume.pdf";
import { Button } from "@mui/material";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <>
      <motion.h2
        className="page-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        RESUME
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
      >
        <div className="page-content" style={{ textAlign: "center" }}>
          <Button
            color="primary"
            variant="contained"
            href={resume}
            download="RT-Resume"
          >
            Download Resume
          </Button>
        </div>
      </motion.div>
      <motion.h2
        className="page-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.4 }}
      >
        SKILLS
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.6 }}
      >
        <div className="page-content">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React.js</p>
          <p>Node.js</p>
          <p>Git</p>
          <p>Agile Software Development</p>
          {/* map() ^THIS^ OUT */}
        </div>
      </motion.div>
      <br />
      <br />
      <br />
    </>
  );
}

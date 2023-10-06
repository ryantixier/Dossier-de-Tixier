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
          <motion.div
            className="resumePreview"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            <Button
              color="primary"
              variant="contained"
              href={resume}
              download="RT-Resume"
            >
              Download Resume
            </Button>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
          >
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Node.js</p>
            <p>Git</p>
            <p>Heroku</p>
            <p>Agile Software Development</p>
            {/* map() ^THIS^ OUT */}
          </motion.div>
        </div>
      </motion.div>
      <br />
      <br />
      <br />
    </>
  );
}

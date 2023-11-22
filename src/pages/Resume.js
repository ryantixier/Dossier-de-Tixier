import React from "react";
import { useEffect } from "react";

import resume from "../assets/RT-Resume.pdf";

// mui
import { Button } from "@mui/material";

// animation
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <motion.h2
        className="page-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        RESUME
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
      >
        <div
          className="page-content"
          style={{ textAlign: "center" }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
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
        data-aos="fade-up"
        data-aos-delay="100"
      >
        SKILLS
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 0.6 }}
      >
        <div className="page-content" data-aos="fade-up" data-aos-delay="150">
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
            <p>AngularJS</p>
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

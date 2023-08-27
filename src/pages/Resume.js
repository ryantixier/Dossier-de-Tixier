import React from "react";
import resume from "../assets/RT-Resume.pdf";
import { Button } from "@mui/material";

export default function Resume() {
  return (
    <>
      <h2 className="page-title">RESUME</h2>
      <div className="page-content">
        <Button
          color="primary"
          variant="outlined"
          href={resume}
          download="RT-Resume"
        >
          Click to Download Resume
        </Button>
        <h2 className="page-title">SKILLS</h2>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React.js</p>
        <p>Node.js</p>
      </div>
    </>
  );
}

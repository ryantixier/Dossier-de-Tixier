import React from "react";
import resume from "../assets/RT-Resume.pdf";
import { Button } from "@mui/material";

export default function Resume() {
  return (
    <>
      <h2 className="page-title">RESUME</h2>
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
      <h2 className="page-title">SKILLS</h2>
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
      <br />
      <br />
      <br />
    </>
  );
}

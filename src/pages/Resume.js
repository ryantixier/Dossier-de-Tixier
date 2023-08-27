import React from "react";
import resume from "../assets/RT-Resume.pdf";
import { Button } from "@mui/material";

export default function Resume() {
  return (
    <div>
      <h1>RESUME/SKILLS</h1>
      <Button variant="outlined">
        <a href={resume} download="resume">
          Download My Resume!
        </a>
      </Button>
    </div>
  );
}

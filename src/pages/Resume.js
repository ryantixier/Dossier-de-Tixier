import React from "react";
import resume from "../assets/Resume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>RESUME/SKILLS</h1>
      <a href={resume} download>
        Download My Resume!
      </a>
    </div>
  );
}

// IMPORTS

// general
import React from "react";
import { useEffect } from "react";

// components
import AboutCard from "../components/AboutCard";

// animation
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

// props
const greetings = {
  header: "GREETINGS",
  description:
    "My name is Ryan Tixier (last name pronounced T-C-A); I am a certified, full-stack web developer with a specialty in front-end development. I am also a lovable space-nerd, a Rubik's Cube aficionado, and a generally curious soul. Welcome to my Portfolio!",
};
const background = {
  header: "BACKGROUND",
  description:
    "I have spent the past ten years pursuing the realms of Education, Mental Healthcare, and the combination thereof. Although I do hold a lot of love for Mental Healthcare in my heart, I decided to make a career change to web development, for which I have nurtured a strong passion.",
};
const exploreAway = {
  header: "EXPLORE AWAY",
  description:
    "For an abbreviated showcase of my works, please visit the “Portfolio” page of this site; for a more comprehensive list, you may visit my GitHub profile (linked below) and browse my repositories. Finally, be sure to check out my “Resume” page for a downloadable copy of my resume, as well as an ever-growing list of skills and competencies.",
};

export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <AboutCard
        header={greetings.header}
        description={greetings.description}
      />
      <br />
      <AboutCard
        header={background.header}
        description={background.description}
      />
      <br />
      <AboutCard
        header={exploreAway.header}
        description={exploreAway.description}
      />
      <br />
      <br />
      <br />
    </>
  );
}

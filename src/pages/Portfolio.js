// IMPORTS

// general
import React from "react";
import { useEffect } from "react";
import "../App.css";

// carousel
import { Carousel } from "antd";

// animation
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

import "../assets/images/lilguy_with_eyes_workout_wizard_on_trans.png";
import PortfolioCard from "../components/PortfolioCard.jsx";
import PortfolioBack from "../components/PortfolioBack.jsx";
import generateCalendar from "antd/es/calendar/generateCalendar";

// PROPS...

// workout wizard
const workoutWizard = {
  image: require("../assets/images/lilguy_with_eyes_workout_wizard_on_trans.png"),
  alt: "Workout Wizard",
  title: "Workout Wizard",
  description:
    "Workout Wizard will quickly become your favorite (free) fitness companion; create an account to design and track workouts according to your fitness goals!",
  deployLink: "https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/",
  githubLink: "https://github.com/ryantixier/Workout-Wizard",
};

// m3c
const m3c = {
  image: require("../assets/images/M3C-password-generator-mock-up.png"),
  alt: "Password Generator",
  title: "Password Generator",
  description:
    "Tired of thinking of new passwords? This vanilla Javascript project generates a random password using a mixture of uppercase and lowercase letters, special characters, and numbers, based on your preference!",
  deployLink: "https://ryantixier.github.io/M3C-password-generator/",
  githubLink: "https://github.com/ryantixier/M3C-password-generator",
};
// m4c
const m4c = {
  image: require("../assets/images/M4C-code-quiz.png"),
  alt: "Code Quiz",
  title: "Code Quiz",
  description:
    "Test your JavaScript knowledge with this timed quiz. Warning: time is deducted for every incorrect answer. See if you can finish the quiz and get the high score! ",
  deployLink: "https://ryantixier.github.io/M4C-code-quiz/",
  githubLink: "https://github.com/ryantixier/M4C-code-quiz",
};

// m9c
const m9c = {
  image: require("../assets/images/M9C-README-generator.png"),
  alt: "README.md Generator",
  title: "README.md Generator",
  description:
    "We all know how much we love writing README's; sorry to ruin the fun, but this project will ask you a series of questions to help you auto-generate a README.md file. Say goodbye to the tedium of starting from scratch every time!",
  githubLink: "https://github.com/ryantixier/M9C_README-Generator",
  disclaimer:
    "Click the link to the GitHub repository for more information on how to use the generator.",
};

// m13c
const m13c = {
  image: require("../assets/images/M13C-e-commerce.png"),
  alt: "E-Commerce Back-End",
  title: "E-Commerce Back-End",
  description:
    "This application reflects the standard, back-end code that helps e-commerce sites keep track of (create new, update old, and delete from) site inventory.",
  githubLink: "https://github.com/ryantixier/M13C_E-Commerce-Back-End",
  disclaimer:
    "Click the link to the GitHub repository for more information on how to navigate this project.",
};

const contentStyle = {
  color: "white",
  lineHeight: "100px",
  textAlign: "center",
  background: "none",
};

export default function Portfolio() {
  const [dotPosition] = React.useState("top");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <h2 className="page-title" data-aos="fade-up" data-aos-delay="100">
        PORTFOLIO
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <div data-aos="fade-up" data-aos-delay="150">
          <Carousel
            dotPosition={dotPosition}
            effect="scrollx"
            autoplay
            autoplaySpeed={5000}
          >
            <div>
              <h3 style={contentStyle}>Project(s)</h3>
              <div className="card-layout">
                <PortfolioCard
                  image={workoutWizard.image}
                  alt={workoutWizard.alt}
                  title={workoutWizard.title}
                  description={workoutWizard.description}
                  deployLink={workoutWizard.deployLink}
                  githubLink={workoutWizard.githubLink}
                />
              </div>
            </div>
            <div>
              <h3 style={contentStyle}>Bootcamp Assignments: Front-end</h3>
              <div className="card-layout">
                <PortfolioCard
                  image={m3c.image}
                  alt={m3c.alt}
                  title={m3c.title}
                  description={m3c.description}
                  deployLink={m3c.deployLink}
                  githubLink={m3c.githubLink}
                />
                <PortfolioCard
                  image={m4c.image}
                  alt={m4c.alt}
                  title={m4c.title}
                  description={m4c.description}
                  deployLink={m4c.deployLink}
                  githubLink={m4c.githubLink}
                />
              </div>
            </div>
            <div>
              <h3 style={contentStyle}>Bootcamp Assignments: Back-end</h3>
              <div className="card-layout">
                <PortfolioBack
                  image={m9c.image}
                  alt={m9c.alt}
                  title={m9c.title}
                  description={m9c.description}
                  githubLink={m9c.githubLink}
                  disclaimer={m9c.disclaimer}
                />
                <PortfolioBack
                  image={m13c.image}
                  alt={m13c.alt}
                  title={m13c.title}
                  description={m13c.description}
                  githubLink={m13c.githubLink}
                  disclaimer={m13c.disclaimer}
                />
              </div>
            </div>
          </Carousel>
        </div>
      </motion.div>
    </>
  );
}

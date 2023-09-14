import React from "react";
import { Carousel } from "antd";
import { motion } from "framer-motion";

import "../assets/images/lilguy_with_eyes_workout_wizard_on_trans.png";
import "../App.css";
import { PortfolioCard } from "../components/PortfolioCard";
import { PortfolioBack } from "../components/PortfolioBack";

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
  alt: "Random Password Generator",
  title: "Random Password Generator",
  description:
    "Tired of thinking of new passwords? This vanilla Javascript project generates a random password using a mixture of uppercase and lowercase letters, special characters, and numbers, based on your preference!",
  deployLink: "https://ryantixier.github.io/M3C-password-generator/",
  githubLink: "https://github.com/ryantixier/M3C-password-generator",
};
// m4c
const m4c = {
  image: require("../assets/images/M4C-code-quiz.png"),
  alt: "Random Password Generator",
  title: "Random Password Generator",
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

// m11c
const m11c = {
  image: require("../assets/images/M11C-note-taker.png"),
  alt: "Note Taker",
  title: "Note Taker",
  description:
    "This application is a simple note-taking aide; write down your ideas, tasks, and to-do's in the same place and access them anywhere from the convenience of your device. NOTE: Functionality to delete a note is in progress.",
  deployLink: "https://immense-hamlet-04654-20b51f7cdbb9.herokuapp.com/",
  githubLink: "https://github.com/ryantixier/M11C_note-taker",
};

const contentStyle = {
  color: "white",
  lineHeight: "100px",
  textAlign: "center",
  background: "none",
};

export default function Portfolio() {
  const [dotPosition] = React.useState("top");

  return (
    <>
      <h2 className="page-title">MY PORTFOLIO</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
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
              <PortfolioCard
                image={m11c.image}
                alt={m11c.alt}
                title={m11c.title}
                description={m11c.description}
                deployLink={m11c.deployLink}
                githubLink={m11c.githubLink}
              />
            </div>
          </div>
        </Carousel>
      </motion.div>
    </>
  );
}

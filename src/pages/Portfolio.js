import React from "react";
import { Carousel } from "antd";

import "../assets/images/lilguy_with_eyes_workout_wizard_on_trans.png";
import "../App.css";
import { PortfolioCard } from "../components/PortfolioCard";

// PROPS...

// workout wizard
const workoutWizard = {
  image: require("../assets/images/lilguy_with_eyes_workout_wizard_on_trans.png"),
  alt: "Workout Wizard",
  title: "Workout Wizard",
  description:
    "Workout Wizard will quickly become your favorite, new (free) fitness compainion; create an account to design and track workouts according to your needs and goals!",
  deployLink: "https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/",
  githubLink: "https://github.com/ryantixier/Workout-Wizard",
};

// m3c

// m4c

// m9c

// m11c

const contentStyle = {
  color: "white",
  lineHeight: "100px",
  textAlign: "center",
  background: "none",
};

export default function Portfolio() {
  const [dotPosition, setDotPosition] = React.useState("top");

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <h2 className="page-title">MY PORTFOLIO</h2>
      <Carousel dotPosition={dotPosition} autoplay autoplaySpeed={5000}>
        <div>
          <h3 style={contentStyle}>Project(s)</h3>
          <PortfolioCard
            image={workoutWizard.image}
            alt={workoutWizard.alt}
            title={workoutWizard.title}
            description={workoutWizard.description}
            deployLink={workoutWizard.deployLink}
            githubLink={workoutWizard.githubLink}
          />
        </div>
        <div>
          <h3 style={contentStyle}>Bootcamp Assignments: Front-end</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Bootcamp Assignments: Back-end</h3>
        </div>
      </Carousel>
    </div>
  );
}

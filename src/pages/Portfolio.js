import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "white",
  lineHeight: "160px",
  textAlign: "center",
  background: "none",
};

export default function Portfolio() {
  const [dotPosition, setDotPosition] = React.useState("top");

  return (
    <div>
      <h2 className="page-title">MY PORTFOLIO</h2>
      <Carousel autoplay dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>Workout Wizard</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Code Gauntlet</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Dr. Drink</h3>
        </div>
      </Carousel>
    </div>
  );
}

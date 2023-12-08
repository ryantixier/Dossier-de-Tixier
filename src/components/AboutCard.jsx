//Imports
import * as React from "react";

export const AboutCard = (props) => {
  //Hooks

  //Functions

  return (
    <>
      <div>
        {/* section header */}
        <h2 className="page-title" data-aos="fade-up" data-aos-delay="100">
          {props.header}
        </h2>
        {/* section content */}
        <p className="page-content" data-aos="fade-up" data-aos-delay="150">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default AboutCard;

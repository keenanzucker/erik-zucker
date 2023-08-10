import React from "react";
import "./About.css";

import image1 from "../assets/hiking.jpg";
import image2 from "../assets/family.jpg";

function About() {
  const aboutInfo = [
    {
      title: "About Me",
      img: image1,
      content: `I'm Erik Zucker, a recognized international leader in the conception, development, qualification, and production of high-power semiconductor laser diodes. I thrive on merging application and customer requirements with advanced technology and designs into profitable, commercial products.

      In my consultancy work, I focus on providing independent consulting services in Lasers and Technology to engineers, managers, executives from startups to Fortune 500 companies. I specialize in numerous areas within the Laser and Technology field.

      I value innovation, efficiency, quality, and integrity in my professional undertakings and employ my technical, strategic planning, and business development skills to deliver holistic solutions and market strategies.
      
      I hold a Bachelor of Science in Physics and a Master of Science in Electrical and Electronics Engineering from UC Santa Barbara.`,
    },
    {
      title: "Interests",
      img: image2,
      content: `Outside of my professional life, I enjoy quality time with my family
                and dog, traveling, and staying active through running, hiking,
                backpacking, and mountain biking throughout the Bay Area and beyond.`,
    },
  ];

  return (
    <div className="aboutContainer">
      {aboutInfo.map((info, index) => (
        <div
          key={index}
          className={index === 0 ? "aboutSection" : "interestsSection"}
        >
          <div className="sectionTitleContainer">
            <div className="aboutSectionTitle">{info.title}</div>
            <img src={info.img} alt={info.title} className="sectionImage" />
          </div>
          <div className="aboutContent">
            {info.content.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>{" "}
        </div>
      ))}
    </div>
  );
}

export default About;

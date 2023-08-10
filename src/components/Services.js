import React from "react";
import "./Services.css";

function Services() {
  const servicesList = [
    "Lasers, optoelectronics, laser applications and markets",
    "Consumer 3D sensing and illumination",
    "Industrial lasers and laser pumping",
    "Telecom amplifiers and laser pumping",
  ];

  const expertiseList = [
    "Technology Assessment and Development",
    "Product Development",
    "New Product Introduction Process (NPI)",
    "Product Qualification and Reliability",
    "Production and Yield Enhancement",
    "Product Definition and Business Development",
    "Strategic Planning",
    "Market Analysis",
    "Competitive Analysis",
    "Due Diligence",
    "Functional Management",
  ];

  return (
    <div className="servicesContainer">
      <div className="servicesSection">
        <h2 className="sectionTitle">Services</h2>
        <ul className="servicesList">
          <div className="item" style={{ marginLeft: -20 }}>
            Consulting on:
          </div>
          {servicesList.map((service, index) => (
            <li key={index} className="item">
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="expertiseSection">
        <h2 className="sectionTitle">Expertise</h2>
        <ul className="expertiseList">
          {expertiseList.map((expertise, index) => (
            <li key={index} className="item">
              {expertise}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;

import React from "react";
import { useCallback } from "react";

import headshot from "../assets/headshot.jpeg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../assets/particles-config.json";

import "./Home.css";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="homeAboutContainer">
      <img className="headshot" src={headshot} alt="Erik Zucker" />
      <h1 className="title-main">Erik Zucker Consulting</h1>
      <p>
        Providing independent consulting services in Lasers and Technology to
        engineers, managers, financial analysts, and executives in startups to
        Fortune 500 companies.
      </p>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
    </div>
  );
}

export default Home;

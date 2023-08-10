import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCodeBranch,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";

import { RiFlashlightFill } from "react-icons/ri";

import "./Header.css";

const Header = () => (
  <div className="header">
    <div className="logoContainer">
      <Link to="/" className="logoLink">
        <RiFlashlightFill className="logoIcon" />
        Erik Zucker Consulting
      </Link>
    </div>
    <div className="navLinks">
      <Link to="/">
        <FaHome className="navIcon" />
        Home
      </Link>
      <Link to="/about">
        <FaUser className="navIcon" />
        About
      </Link>
      <Link to="/projects">
        <FaCodeBranch className="navIcon" />
        Experience
      </Link>
      <Link to="/services">
        <FaTools className="navIcon" />
        Services
      </Link>
      <Link to="/contact">
        <FaEnvelope className="navIcon" />
        Contact
      </Link>
    </div>
  </div>
);

export default Header;

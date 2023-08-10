import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Contact.css";

const EMAIL = "erik.zucker@gmail.com";
const POSITION = [37.35705, -122.07559];
const LINKEDIN_URL = "https://www.linkedin.com/in/erikzucker/";

const Contact = () => (
  <div className="contactContainer">
    <div className="contactInfo">
      <h2 className="contactTitle">Contact Me</h2>
      <p className="contactText">
        I am currently open to working with new clients. Feel free to reach out
        with proposals or questions.
      </p>
      <div className="contactButtonContainer">
        <a href={`mailto:${EMAIL}`} className="contactButton">
          {EMAIL}
        </a>
        <a
          href={LINKEDIN_URL}
          className="contactButton"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>

    <div className="mapContainer">
      <h2 className="contactTitle">Location</h2>
      <MapContainer
        center={POSITION}
        zoom={11}
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={POSITION}>
          <Popup>Los Altos, California</Popup>
        </Marker>
      </MapContainer>
    </div>
  </div>
);

export default Contact;

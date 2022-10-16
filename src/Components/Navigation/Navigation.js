import React from "react";
import "./Navigation.css";
import DoctorLogo from "../../Assets/doctor-logo.png";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <img src={DoctorLogo} className="doctor-logo" alt="doctor-logo" />
      </div>
      <div className="links-container">
        <a href="/" className="navigation-link">
          Home
        </a>
        <a href="/about" className="navigation-link">
          About
        </a>
        <a href="/appointment" className="navigation-link">
          Appointment
        </a>
        <a href="/blog" className="navigation-link">
          Blog
        </a>
        <a href="/contact" className="navigation-link">
          Contact
        </a>
      </div>
    </div>
  );
}

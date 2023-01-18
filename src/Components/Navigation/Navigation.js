import React from "react";
import "./Navigation.css";
import DoctorLogo from "../../Assets/doctor-logo.png";
import { FaBars } from "react-icons/fa";

export default function Navigation() {
    return (
        <div className="navigation-container">
            <div className="logo-container">
                <img
                    src={DoctorLogo}
                    className="doctor-logo"
                    alt="doctor-logo"
                />
            </div>
            <div className="links-container">
                <a href="/" className="navigation-link">
                    Home
                </a>
                <a href="#about" className="navigation-link">
                    About
                </a>
                <a href="#appointment" className="navigation-link">
                    Appointment
                </a>

                <a href="#contact" className="navigation-link">
                    Contact
                </a>
                <div className="selector" id="selector">
                    <button
                        className="selector-button"
                        onClick={() =>
                            document.getElementById("dropdown").style
                                .display === "none"
                                ? (document.getElementById(
                                      "dropdown"
                                  ).style.display = "flex")
                                : (document.getElementById(
                                      "dropdown"
                                  ).style.display = "none")
                        }
                    >
                        <FaBars className="bars" />
                    </button>

                    <ul id="dropdown">
                        <li>
                            <a
                                href="/"
                                className="navigation-link"
                                onClick={() =>
                                    (document.getElementById(
                                        "dropdown"
                                    ).style.display = "none")
                                }
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="navigation-link"
                                onClick={() =>
                                    (document.getElementById(
                                        "dropdown"
                                    ).style.display = "none")
                                }
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#appointment"
                                className="navigation-link"
                                onClick={() =>
                                    (document.getElementById(
                                        "dropdown"
                                    ).style.display = "none")
                                }
                            >
                                Appointment
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="navigation-link"
                                onClick={() =>
                                    (document.getElementById(
                                        "dropdown"
                                    ).style.display = "none")
                                }
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

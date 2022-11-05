import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-title">Contact Us</div>
                    <div className="footer-text">
                        <p>Address: Egnatias 2</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>
                            Email:
                            <a href="mailto:doctor@gmail.com">doctor@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer-title">Opening Hours</div>
                    <div className="footer-text">
                        <p>Monday - Friday: 8am - 8pm</p>
                        <p>Saturday: 8am - 5pm</p>
                        <p>Sunday: 9am - 2pm</p>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer-title">Quick Links</div>
                    <div className="footer-text">
                        <p>
                            <a href="#appointment">Make an Appointment</a>
                        </p>
                        <p>
                            {" "}
                            <a href="#about">About Us</a>
                        </p>
                        <p>
                            {" "}
                            <a href="#services">Our Services</a>
                        </p>
                        <p>
                            {" "}
                            <a href="#contact">Contact Us</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

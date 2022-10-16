import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import "./MainScreen.css";
import Confidentiality from "../../Assets/confidentiality.png";
import Support from "../../Assets/support.png";
import Reliability from "../../Assets/reliability.png";

export default function MainScreen() {
  return (
    <div className="main-screen-container">
      <Navigation />
      <div className="happy-family-container">
        <div className="passion">Discover the secret of living life with passion!</div>
        <div className="make-appointment">
          <div className="appointment-button">
            <a href="/appointment"> Make Appointment</a>
          </div>
        </div>
      </div>
      <div className="value-container">
        <h1>You are our priority!</h1>
        <div className="cards">
          <div className="value-card">
            <img src={Confidentiality} className="value-image" alt="confidentiality"></img>
            <div className="value-title">Confidentiality</div>
            <p>Your personal data are safe with us. We will not share any details about you to anyone.</p>
          </div>
          <div className="value-card">
            <img src={Support} className="value-image" alt="confidentiality"></img>
            <div className="value-title">Support 24/7</div>
            <p>You can contact us any time of any day if you feel unwell. One of our doctors will help you.</p>
          </div>
          <div className="value-card">
            <img src={Reliability} className="value-image" alt="confidentiality"></img>
            <div className="value-title">Reliability</div>
            <p>Lorem Ipsum lakrimosa bobota kses bro enap rama tetoio</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

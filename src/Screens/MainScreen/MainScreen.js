import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import "./MainScreen.css";
import Confidentiality from "../../Assets/confidentiality.png";
import Support from "../../Assets/support.png";
import Reliability from "../../Assets/reliability.png";
import Doctor from "../../Assets/doctor.png";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";

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
            <p>All our meetings are confidential and your information is protected</p>
          </div>
          <div className="value-card">
            <img src={Support} className="value-image" alt="confidentiality"></img>
            <div className="value-title">Support 24/7</div>
            <p>You can call me any time of the day. I am always ready to support you in any difficult situation.</p>
          </div>
          <div className="value-card">
            <img src={Reliability} className="value-image" alt="confidentiality"></img>
            <div className="value-title">Reliability</div>
            <p>I will never leave you in a difficult moment. Call me right now and make an appointment.</p>
          </div>
        </div>
      </div>
      <div className="doctor-info-container">
        <div className="doctor-image">
          <img src={Doctor} alt="doctor"></img>
        </div>
        <div className="doctor-info">
          <div className="doctor-details">
            <h1>Dr. Edie Hoyles</h1>
            <h2>Professional Cardiologist </h2>
            <h3>Aristotle University of Thessaloniki</h3>
            <p>
              Dr. Edie Hoyles was born in DuBois, Pennsylvania and is a graduate of Aristotle University of Thessaloniki. She obtained her medical degree at Thomas Jefferson University in
              Philadelphia. Hes residency was at Thomas Jefferson and its affiliated Wills Eye Hospital, and she completed her training with fellowships at the University of Connecticut in cataract
              and corneal surgery.
            </p>
            <p className="smaller">
              Edie Hoyles, CNM is originally from Springfield, MA. She received her nursing degree from Burbank Hospital School of Nursing in Fitchburg, MA. Pamela received her Certificate in
              Nurse-Midwifery from Baystate Medical Center in Springfield, MA.
            </p>
          </div>
          <div className="learn-more-button">
            <a href="/about" className="learn-more">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="office-info-container">
        <div className="office-title">
          <h1>Our office</h1>
        </div>
        {/* <div className="row"> */}
        <ImageSlider />
        {/* <div className="office-info">
            <div className="office-details">
              <p>
                Dr. Edie Hoyles was born in DuBois, Pennsylvania and is a graduate of Aristotle University of Thessaloniki. She obtained her medical degree at Thomas Jefferson University in
                Philadelphia. Hes residency was at Thomas Jefferson and its affiliated Wills Eye Hospital, and she completed her training with fellowships at the University of Connecticut in cataract
                and corneal surgery.
              </p>
              <p className="smaller">
                Edie Hoyles, CNM is originally from Springfield, MA. She received her nursing degree from Burbank Hospital School of Nursing in Fitchburg, MA. Pamela received her Certificate in
                Nurse-Midwifery from Baystate Medical Center in Springfield, MA.
              </p>
            </div>
            <div className="learn-more-button">
              <a href="/about" className="learn-more">
                Learn More
              </a>
            </div>
          </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}

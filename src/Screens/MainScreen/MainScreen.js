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
            <a href="#appointment"> Make Appointment</a>
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
        <ImageSlider />
        <div className="office-info">
          <div className="office-details">
            <p>
              Our medical office is equipped with the best of the best. Cutting edge technology machinery that help the doctor identify exactly what your problem is and provide viable and real
              solutions. The waiting room is very comfortable with a pleasant atmosphere that makes the situation a little better. Do not hesitate to have a drink and eat from our fresh fruit while
              you wait for the doctor to see you.
            </p>
            <p className="smaller">Our office was recently renovated. New colors, new furniture but most importantly the newest medical equipment that exists today. All that for every one of you. </p>
          </div>
        </div>
        <div className="directions-button">
          <a
            href="https://www.google.com/maps/dir/40.6381,22.9455/%CE%A6%CF%81%CE%AC%CE%B3%CE%BC%CE%B1+%CE%A3%CF%86%CE%B7%CE%BA%CE%B9%CE%AC%CF%82,+%CE%92%CE%AD%CF%81%CE%BF%CE%B9%CE%B1+591+32/@40.5237035,22.4119388,11z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x13578b4886dd2039:0x838e4ef4e8c1c47f!2m2!1d22.1924891!2d40.3963318!3e0"
            className="learn-more"
          >
            Show directions
          </a>
        </div>
      </div>

      <div className="appointment" id="appointment">
        <div className="row">
          <div className="appointment-title">Make an appointment</div>
          <div className="form-container">
            <form action="https://public.herotofu.com/v1/ff38ad90-4f3c-11ed-8970-6943e4ac8982" method="post">
              <h1>Personal Information</h1>

              <div className="form-column">
                <label for="name">Your Name</label>
                <input name="Name" id="name" type="text" placeholder="Name" required className="appointment-input" />
              </div>
              <div className="form-column">
                <label for="email">Your Email</label>
                <input name="Email" id="email" type="email" placeholder="E-mail" required className="appointment-input" />
              </div>
              <div className="form-column">
                <label for="cellphone">Your phone number</label>
                <input name="Phone" id="phone" type="phone" placeholder="Phone Number" required className="appointment-input" />
              </div>
              <div className="form-column">
                <label for="address">Your Address</label>
                <input name="Address" id="address" type="address" placeholder="Address" required className="appointment-input" />
              </div>
              <div className="form-column">
                <label for="address">Appointment's Date</label>
                <input type="date" id="start" name="trip-start" value="2022-11-22" min="2022-11-22" max="2025-12-31" className="date"></input>
              </div>

              <button className="appointment-button" type="submit">
                Make appointment
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import Office1 from "../../Assets/office-1.jpg";
import Office2 from "../../Assets/office-2.jpg";
import Office3 from "../../Assets/office-3.jpg";
import Office4 from "../../Assets/office-4.jpg";
import Office5 from "../../Assets/office-5.jpg";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

import "./ImageSlider.css";

const officeImages = [Office1, Office2, Office3, Office4, Office5];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    if (index === 0) {
      setIndex(4);
    } else {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index === 4) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="image-slider-container">
      <button onClick={slideLeft} className="slide-button">
        <BsFillArrowLeftCircleFill />
      </button>
      <img src={officeImages[index]} alt="office" className="office-img" />
      <button onClick={slideRight} className="slide-button">
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
}

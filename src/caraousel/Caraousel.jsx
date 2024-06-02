import React, { useState } from "react";
import "./Caraousel.css";

const slides = [1, 2, 3, 4, 5, 6, 7, 8]; // Define the slides array directly in the file

const Caraousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 2 : prevIndex - 1
    );
  };

  return (
    <>
      <h1> Carousel Slider</h1>

      <div className="container">
        <button onClick={prevSlide}>Prev</button>
        <div className="slider-container">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {slides.map((number, index) => (
              <div key={index} className="slide">
                <div className="text-container">{number}</div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide}>Next</button>
      </div>
    </>
  );
};

export default Caraousel;

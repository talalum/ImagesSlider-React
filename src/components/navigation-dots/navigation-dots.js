import React from "react";
import "./navigation-dots.css";

const NavigationDots = ({ slides, currentSlideIndex, goToSlide }) => {
  console.log("NavigationDots");
  return (
    <div className="dots-container">
      {slides.map((slide, slideIndex) => (
        <button
          className={
            "dot " + (currentSlideIndex === slideIndex ? "selected-button" : "")
          }
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
        ></button>
      ))}
    </div>
  );
};

export default NavigationDots;

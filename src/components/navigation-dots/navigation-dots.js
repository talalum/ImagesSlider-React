import React from "react";
import "./navigation-dots.css";

const NavigationDots = ({ amountOfDots, currentDotIndex, goToDot }) => {
  console.log("NavigationDots");

  const jsxButtonArray = Array.from({ length: amountOfDots }, (_, dotIndex) => {
    return (
      <button
        key={dotIndex}
        className={
          "dot " + (currentDotIndex === dotIndex ? "selected-button" : "")
        }
        onClick={() => goToDot(dotIndex)}
      ></button>
    );
  });

  return (
    <div className="dots-container">
      {jsxButtonArray}
    </div>
  );
};

export default NavigationDots;

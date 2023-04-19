import React from "react";
import "./navigation-dots.css";

const NavigationDots = ({ amountOfDots, currentDotIndex, goToDot }) => {
  console.log("NavigationDots");

  const threeHeaders = Array.from({ length: amountOfDots }, (_, dotIndex) => {
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

  console.log(threeHeaders);

  return (
    <div className="dots-container">
      {threeHeaders}
    </div>
  );
};

export default NavigationDots;

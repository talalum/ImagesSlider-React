import React from "react";
import NavigationDots from "../navigation-dots/navigation-dots";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import "../image-slider/slider.css";
import UseSlider from "../../hooks/use-slider";
import "./animated-slider.css";

const AnimatedSlider = ({ parentWidth, children }) => {
  console.log("AnimatedSlider");

  const childrenArray = React.Children.toArray(children);

  const { currentIndex, goBack, goNext, goToSlide } = UseSlider({
    amountOfSlides: children.length,
    shouldLoop: true,
  });

  const slidesContainerStyles = {
    width: parentWidth * children.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  };

  return (
    <div className="slider">
      <div>
        <div onClick={goBack} className="left-arrow">
          <RxCaretLeft />
        </div>
        <div onClick={goNext} className="right-arrow">
          <RxCaretRight />
        </div>
      </div>
      <div className="slides-container-overflow">
        <div style={slidesContainerStyles} className="slides-container">
          {React.Children.map(children, (element, idx) => {
            return (
              <div style={{ width: `${parentWidth}px`}} className="slide">
                {element}
              </div>
            );
          })}
        </div>
      </div>
      <NavigationDots
        amountOfDots={childrenArray}
        currentDotIndex={currentIndex}
        goToDot={goToSlide}
      />
    </div>
  );
};

export default AnimatedSlider;

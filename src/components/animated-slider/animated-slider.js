import React from "react";
import NavigationDots from "../navigation-dots/navigation-dots";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import "../image-slider/slider.css";
import useSlide from "../../hooks/use-slider";
import './animated-slider.css'

const AnimatedSlider = ({ slides, parentWidth, children }) => {
  console.log("AnimatedSlider");
  const { currentIndex, goBack, goNext, goToSlide } = useSlide({
    amountOfSlides: Object.keys(slides).length,
    shouldLoop: true,
  });


  const slidesContainerStyles = {
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  };

  const getSlideStyles = (slideIndex) => ({
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.2s",
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

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
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStyles(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
      <NavigationDots
        slides={slides}
        currentSlideIndex={currentIndex}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default AnimatedSlider;

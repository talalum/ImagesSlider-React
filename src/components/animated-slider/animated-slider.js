import React from "react";
import NavigationDots from "../navigation-dots/navigation-dots";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import "../image-slider/slider.css";
import UseSlider from "../../hooks/use-slider";
import "./animated-slider.css";

const AnimatedSlider = ({ parentWidth, children }) => {
  console.log("AnimatedSlider");
  console.log(children);
  console.log(React.Children.toArray(children));
  // console.log(React.Children.toArray(children));
  const { currentIndex, goBack, goNext, goToSlide } = UseSlider({
    amountOfSlides: children.length,
    shouldLoop: true,
  });

  const slidesContainerStyles = {
    width: parentWidth * children.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  };

  const getSlideStyles = (slideIndex) => ({
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.2s",
    backgroundImage: `url(${React.Children.toArray(children)[slideIndex].props.url})`,
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
          {React.Children.map(children, (element, idx) => {
            return (
              <div style={getSlideStyles(idx)}>
                <img src={element.props.url} />
              </div>
            );
          })}
        </div>
      </div>
      <NavigationDots
        slides={React.Children.toArray(children)}
        currentSlideIndex={currentIndex}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default AnimatedSlider;

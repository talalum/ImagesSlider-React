import { useState } from "react";
import { RxDotFilled, RxCaretRight, RxCaretLeft } from 'react-icons/rx';
import './App.css';
import './Slider.css';


const ImagesSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWithBackground = {
    height: "100%",
    margin: "1vw 1vw",
    borderRadius: "15px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="slider">
      <div>
        <div onClick={goBack} className="leftArrow">
          <RxCaretLeft />
        </div>
        <div onClick={goNext} className="rightArrow">
          <RxCaretRight />
        </div>
      </div>
      <div style={slideStylesWithBackground}></div>
      <div className="dotsContainer">
        {slides.map((slide, slideIndex) => (
          <div
            className="dot"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}>
            <RxDotFilled />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ImagesSlider;
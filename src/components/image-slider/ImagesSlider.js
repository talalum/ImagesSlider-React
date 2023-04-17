import { RxDotFilled, RxCaretRight, RxCaretLeft } from "react-icons/rx";
import "./slider.css";
import useSlide from "../../hooks/useslide";

const ImagesSlider = ({ slides }) => {
  const { currentIndex, goBack, goNext, goToSlide } = useSlide({
    amountOfSlides: Object.keys(slides).length,
    shouldLoop: true,
  });

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
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesSlider;

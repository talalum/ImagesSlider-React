import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import "./slider.css";
import useSlider from "../../hooks/use-slider";
import NavigationDots from "../navigation-dots/navigation-dots";

const ImagesSlider = ({ slides }) => {
  console.log("ImagesSlider");
  const { currentIndex, goBack, goNext, goToSlide } = useSlider({
    amountOfSlides: Object.keys(slides).length,
    shouldLoop: false,
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
        <div onClick={goBack} className="left-arrow">
          <RxCaretLeft />
        </div>
        <div onClick={goNext} className="right-arrow">
          <RxCaretRight />
        </div>
      </div>
      <div style={slideStylesWithBackground}></div>
      <NavigationDots slides={slides} currentSlideIndex={currentIndex} goToSlide={goToSlide} />
    </div>
  );
};

export default ImagesSlider;

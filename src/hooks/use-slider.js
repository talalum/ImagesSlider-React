import { useState } from "react";

const useSlider = ({ amountOfSlides, shouldLoop }) => {
  console.log("useSlide");
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    const isFirstSlide = currentIndex === 0;
    let newIndex = currentIndex - 1;
    if (shouldLoop) {
      newIndex = isFirstSlide ? amountOfSlides - 1 : currentIndex - 1;
    }
    goToSlide(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === (amountOfSlides - 1);
    let newIndex = currentIndex + 1;
    if (isLastSlide && shouldLoop) {
      newIndex = isLastSlide ? 0 : currentIndex + 1;
    }
    goToSlide(newIndex);
  };

  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < amountOfSlides) {
      setCurrentIndex(slideIndex);
    }
  };

  return {
    currentIndex,
    goBack,
    goNext,
    goToSlide,
  };
};

export default useSlider;

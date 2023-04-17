import './App.css';
import ImagesSlider from './components/image-slider/ImagesSlider'
import './components/image-slider/slider.css'

function App() {
  const slides = [
    { url: "https://escales.ponant.com/wp-content/uploads/2020/12/plage.jpg" },
    { url: "https://cdn.britannica.com/25/123125-050-8E6C8227/rowboat.jpg" },
    { url: "https://ggsc.s3.amazonaws.com/images/uploads/Forest_in_Japan.jpg" },
  ];

  return (
    <div className='slider-container'>
      <ImagesSlider slides={slides} />
    </div>
  );
}

export default App;

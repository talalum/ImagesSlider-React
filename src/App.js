import "./App.css";
import AnimatedSlider from "./components/animated-slider/animated-slider";
// import ImagesSlider from "./components/image-slider/image-slider";
import "./components/image-slider/slider.css";

function App() {

  return (
    <div className="slider-container">
      <AnimatedSlider parentWidth={750}>
        <div>
          <img src="https://escales.ponant.com/wp-content/uploads/2020/12/plage.jpg"></img>
          {/* <h2>LKJKFLJFLK</h2> */}
        </div>
        <div>
          <p>AAAAA</p>
        </div>
        <div>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
      </AnimatedSlider>
    </div>
  );
}

export default App;

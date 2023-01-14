import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel autoPlay="true"
    infiniteLoop
    transitionTime={500}
    duration={3000}
    >
      <div>
        <img src="/slide2.jpg" />
        <p className='legend'>We raise them with love.</p>
      </div>
      <div>
        <img src="/slide4.jpg" />
        <p className="legend">Their Food is full of vitamins.</p>
      </div>
      <div>
        <img src="/slide5.jpg" />
        <p className="legend">Their Health is our first priority.</p>
      </div>
    </Carousel>
  );
};

export default Slider;

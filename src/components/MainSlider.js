import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselSection() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      emulateTouchemulateTouch={true}
    >
      <div>
        <img src={"https://i.ibb.co/SQwmfyR/DADDAR-1.jpg"} alt="DADDAR-1" />
      </div>
      <div>
        <img src={"https://i.ibb.co/175qcJF/SENNHE-1.jpg"} alt="SENNHE-1" />
      </div>
      <div>
        <img src={"https://i.ibb.co/zn4PbNp/VIDEO-1.jpg"} alt="VIDEO-1" />
      </div>
    </Carousel>
  );
}

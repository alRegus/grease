import React from "react";

import Carousel from "nuka-carousel";

export default function SliderComponent({ displaySlider }) {
  return (
    <>
      <Carousel
        slidesToShow={4}
        slidesToScroll={4}
        wrapAround={true}
        defaultControlsConfig={{
          nextButtonText: ">",
          nextButtonStyle: {
            fontSize: "1.2rem",
            fontWeight: "700",
          },
          prevButtonStyle: {
            fontSize: "1.2rem",
            fontWeight: "700",
          },
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "gray",
            marginLeft: "5px",
          },
        }}
      >
        {displaySlider}
      </Carousel>
    </>
  );
}

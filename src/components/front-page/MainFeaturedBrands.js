import React from "react";
import Carousel from "nuka-carousel";
import useHttp from "../../hooks/useHttp";

import classes from "./MainFeaturedBrands.module.scss";

export default function MainFeaturedBrands() {
  const brands = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/brands.json"
  );

  const displayBrands = brands.map((brand) => (
    <div className={classes["brand-container"]} key={brand.brandName}>
      <img src={brand.brandImgUrl} alt={brand.brandName} />
    </div>
  ));

  return (
    <section className={classes["featured-brands"]}>
      <h2>Explore Brands</h2>
      <div className={classes["brands-list"]}>
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
          {displayBrands}
        </Carousel>
      </div>
    </section>
  );
}

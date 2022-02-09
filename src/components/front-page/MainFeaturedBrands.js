import React from "react";
import useHttp from "../../hooks/useHttp";

import classes from "./MainFeaturedBrands.module.scss";
import SliderComponent from "../SliderComponent";

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
        <SliderComponent displaySlider={displayBrands} />
      </div>
    </section>
  );
}

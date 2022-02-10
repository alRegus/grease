import React from "react";
import useHttp from "../../hooks/useHttp";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./MainFeaturedBrands.module.scss";
import SliderComponent from "../SliderComponent";

export default function MainFeaturedBrands() {
  const brands = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/brands.json"
  );
  const dispatch = useDispatch();

  const brandHandler = (e) => {
    const brandValue = e.target.alt;

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: "",
        used: false,
        deals: false,
        brand: brandValue,
      },
    });
  };

  const displayBrands = brands.map((brand) => (
    <div
      onClick={brandHandler}
      className={classes["brand-container"]}
      key={brand.brandName}
    >
      <Link to="/products-list">
        <img src={brand.brandImgUrl} alt={brand.brandName} />
      </Link>
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

import React, { useState } from "react";
import useHttp from "../../hooks/useHttp";

import classes from "./ProductsFilterMenu.module.scss";

export default function ProductsFilterMenu() {
  const brands = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/brands.json"
  );

  const displayBrands = brands.map((brand) => (
    <li key={brand.brandName}>{brand.brandName}</li>
  ));

  const [brandClassToggle, setBrandClassToggle] = useState(false);
  const [priceClassToggle, setPriceClassToggle] = useState(false);
  const [ratingClassToggle, setRatingClassToggle] = useState(false);
  const [discountClassToggle, setDiscountClassToggle] = useState(false);
  const [typeClassToggle, setTypeClassToggle] = useState(false);
  const [categoryClassToggle, setCategoryClassToggle] = useState(false);

  return (
    <div className={classes["products-filter"]}>
      <section
        onClick={() => {
          setBrandClassToggle((prevState) => !prevState);
        }}
      >
        Brand
        <div className={classes[`${brandClassToggle ? "" : "none"}`]}>
          <ul>{displayBrands}</ul>
        </div>
      </section>
      <section
        onClick={() => {
          setPriceClassToggle((prevState) => !prevState);
        }}
      >
        Price Range{" "}
        <div className={classes[`${priceClassToggle ? "" : "none"}`]}>
          <ul>
            <li>Less then 100$</li>
            <li>More then 100$</li>
          </ul>
        </div>
      </section>
      <section
        onClick={() => {
          setRatingClassToggle((prevState) => !prevState);
        }}
      >
        Rating & Reviews
        <div className={classes[`${ratingClassToggle ? "" : "none"}`]}>
          <ul>
            <li>lo1</li>
            <li>LOL2</li>
            <li>LOLLZZ3</li>
          </ul>
        </div>
      </section>
      <section
        onClick={() => {
          setDiscountClassToggle((prevState) => !prevState);
        }}
      >
        Discount
        <div className={classes[`${discountClassToggle ? "" : "none"}`]}>
          <ul>
            <li>lo1</li>
            <li>LOL2</li>
            <li>LOLLZZ3</li>
          </ul>
        </div>
      </section>
      <section
        onClick={() => {
          setTypeClassToggle((prevState) => !prevState);
        }}
      >
        Type
        <div className={classes[`${typeClassToggle ? "" : "none"}`]}>
          <ul>
            <li>lo1</li>
            <li>LOL2</li>
            <li>LOLLZZ3</li>
          </ul>
        </div>
      </section>
      <section
        onClick={() => {
          setCategoryClassToggle((prevState) => !prevState);
        }}
      >
        Category
        <div className={classes[`${categoryClassToggle ? "" : "none"}`]}>
          <ul>
            <li>lo1</li>
            <li>LOL2</li>
            <li>LOLLZZ3</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

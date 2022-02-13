import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";

import classes from "./ProductsFilterMenu.module.scss";

export default function ProductsFilterMenu() {
  const brands = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/brands.json"
  );
  const types = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/types.json"
  );
  const categories = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  );

  const prevBrandArr = useSelector((state) => state.filter.brand);
  console.log(prevBrandArr);
  /* const [brand, setBrand] = useState([]); */
  const dispatch = useDispatch();

  const displayBrands = brands.map((brand) => (
    <li key={brand.brandName} data-brand={brand.brandName}>
      {brand.brandName}
    </li>
  ));

  const displayTypes = types.map((type) => (
    <li key={type.typeName} data-type={type.TypeName}>
      {type.typeName
        .split("-")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.substring(1);
        })
        .join(" ")}
    </li>
  ));

  const displayCategories = categories.map((category) => (
    <li key={category} data-category={category}>
      {category}
    </li>
  ));

  //!!если что удалить дата атрибуты

  const [brandClassToggle, setBrandClassToggle] = useState(false);
  const [priceClassToggle, setPriceClassToggle] = useState(false);
  const [ratingClassToggle, setRatingClassToggle] = useState(false);
  const [discountClassToggle, setDiscountClassToggle] = useState(false);
  const [typeClassToggle, setTypeClassToggle] = useState(false);
  const [categoryClassToggle, setCategoryClassToggle] = useState(false);

  const brandHandler = (e) => {
    const dataAttr = e.target.getAttribute("data-brand");

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: { brand: Array.from(new Set([...prevBrandArr, dataAttr])) },
    });
  }; //!!

  return (
    <div className={classes["products-filter"]}>
      <section
        onClick={(e) => {
          setBrandClassToggle((prevState) => {
            if (e.target.tagName === "LI") {
              return prevState;
            } else {
              return !prevState;
            }
          });
        }}
      >
        <p>Brand</p>
        <div
          className={classes[`${brandClassToggle ? "" : "none"}`]}
          onClick={brandHandler}
        >
          <ul>{displayBrands}</ul>
        </div>
      </section>
      <section
        onClick={(e) => {
          setPriceClassToggle((prevState) => {
            if (e.target.tagName === "LI") {
              return prevState;
            } else {
              return !prevState;
            }
          });
        }}
      >
        <p>Price Range</p>
        <div className={classes[`${priceClassToggle ? "" : "none"}`]}>
          <ul>
            <li>Under 50$</li>
            <li>50$ to 100$</li>
            <li>100$ to 250$</li>
            <li>250$ to 500$</li>
            <li>Over 500$</li>
          </ul>
        </div>
      </section>
      <section
        onClick={(e) => {
          setRatingClassToggle((prevState) => {
            if (e.target.tagName === "LI") {
              return prevState;
            } else {
              return !prevState;
            }
          });
        }}
      >
        <p>Rating & Reviews</p>
        <div className={classes[`${ratingClassToggle ? "" : "none"}`]}>
          <ul>
            <li>Less than 3</li>
            <li>3 and more</li>
            <li>4 and more</li>
          </ul>
        </div>
      </section>
      <section
        onClick={(e) => {
          setDiscountClassToggle((prevState) => {
            if (e.target.tagName === "LI") {
              return prevState;
            } else {
              return !prevState;
            }
          });
        }}
      >
        <p>Discount</p>
        <div className={classes[`${discountClassToggle ? "" : "none"}`]}>
          <ul>
            <li>10% Off or More </li>
            <li>25% Off or More </li>
            <li>50% Off or More </li>
          </ul>
        </div>
      </section>
      <section
        onClick={(e) => {
          setTypeClassToggle((prevState) => {
            if (e.target.tagName === "LI") {
              return prevState;
            } else {
              return !prevState;
            }
          });
        }}
      >
        <p>Type</p>
        <div className={classes[`${typeClassToggle ? "" : "none"}`]}>
          <ul>{displayTypes}</ul>
        </div>
      </section>
      <section
        onClick={(e) => {
          setCategoryClassToggle((prevState) => {
            if (e.target.tagName === "LI") {
              return prevState;
            } else {
              return !prevState;
            }
          });
        }}
      >
        <p>Category</p>
        <div className={classes[`${categoryClassToggle ? "" : "none"}`]}>
          <ul>{displayCategories}</ul>
        </div>
      </section>
    </div>
  );
}

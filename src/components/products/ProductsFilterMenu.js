import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";

import classes from "./ProductsFilterMenu.module.scss";

export default function ProductsFilterMenu() {
  const brands = useHttp(`${process.env.REACT_APP_API}/brands.json`);
  const types = useHttp(`${process.env.REACT_APP_API}/types.json`);
  const categories = useHttp(`${process.env.REACT_APP_API}/categories.json`);

  const filterBrands = useSelector((state) => state.filter.brand);
  const filterTypes = useSelector((state) => state.filter.type);

  const prevBrandArr = useSelector((state) => state.filter.brand);
  const prevTypeArr = useSelector((state) => state.filter.type);

  const displayFilterMenu = useSelector((state) => state.display.display);
  const filteredParamReducer = useSelector(
    (state) => state.filteredParamValues.filteredParamValues
  );

  const dispatch = useDispatch();

  const displayBrands = brands.map((brand) => (
    <li key={brand.brandName} data-brand={brand.brandName}>
      {brand.brandName}
    </li>
  ));

  const displayTypes = types.map((type) => (
    <li key={type.typeName} data-type={type.typeName}>
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
    if (filterBrands.includes(dataAttr)) {
      dispatch({
        type: "SET_FILTER_PARAMS",
        payload: { brand: filterBrands.filter((brand) => brand !== dataAttr) },
      });
    }
  };

  const priceHandler = (e) => {
    const priceAttr = e.target.getAttribute("data-price");
    const priceArr = priceAttr.split("-").map((str) => +str);

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: { priceRange: priceArr },
    });
  };

  const ratingHandler = (e) => {
    const ratingAttr = e.target.getAttribute("data-rating");
    const ratingArr = ratingAttr.split("-").map((str) => +str);

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: { rating: ratingArr },
    });
  };

  const discountHandler = (e) => {
    const discountAttr = e.target.getAttribute("data-discount");
    const discountArr = discountAttr.split("-").map((str) => +str);

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: { discount: discountArr },
    });
  };

  const typeHandler = (e) => {
    const typeAttr = e.target
      .getAttribute("data-type")
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
      })
      .join(" ");

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: { type: Array.from(new Set([...prevTypeArr, typeAttr])) },
    });

    if (filterTypes.includes(typeAttr)) {
      dispatch({
        type: "SET_FILTER_PARAMS",
        payload: { type: filterTypes.filter((type) => type !== typeAttr) },
      });
    }
  };

  const categoryHandler = (e) => {
    const categoryAttr = e.target.getAttribute("data-category");

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: { categories: categoryAttr },
    });
  };

  const clearHandler = () => {
    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: [],
        used: false,
        deals: false,
        brand: [],
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
  };

  const closeFilterMenuHandler = () => {
    dispatch({ type: "GET_DISPLAY_FILTER_MENU", payload: false });
    dispatch({ type: "OVERFLOW_TOGGLE", payload: { overflow: "scroll" } });
  };

  console.log(filteredParamReducer);

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
        <div
          className={classes[`${priceClassToggle ? "" : "none"}`]}
          onClick={priceHandler}
        >
          <ul>
            <li data-price="1-49">Under 50$</li>
            <li data-price="50-100">50$ to 100$</li>
            <li data-price="100-249">100$ to 250$</li>
            <li data-price="250-500">250$ to 500$</li>
            <li data-price="501-9999999999">Over 500$</li>
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
        <div
          onClick={ratingHandler}
          className={classes[`${ratingClassToggle ? "" : "none"}`]}
        >
          <ul>
            <li data-rating="1-2">Less than 3</li>
            <li data-rating="3-5">3 and more</li>
            <li data-rating="4-5">4 and more</li>
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
        <div
          onClick={discountHandler}
          className={classes[`${discountClassToggle ? "" : "none"}`]}
        >
          <ul>
            <li data-discount="10-100">10% Off or More </li>
            <li data-discount="25-100">25% Off or More </li>
            <li data-discount="50-100">50% Off or More </li>
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
        <div
          onClick={typeHandler}
          className={classes[`${typeClassToggle ? "" : "none"}`]}
        >
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
        <div
          onClick={categoryHandler}
          className={classes[`${categoryClassToggle ? "" : "none"}`]}
        >
          <ul>{displayCategories}</ul>
        </div>
      </section>
      {displayFilterMenu && (
        <h2 style={{ fontSize: "1rem", paddingTop: "20px" }}>
          {filteredParamReducer}
        </h2>
      )}
      <button onClick={clearHandler} className={classes["clear-all"]}>
        Clear All
      </button>
      {displayFilterMenu && (
        <button
          className={classes["done-btn"]}
          onClick={closeFilterMenuHandler}
        >
          I`m Done
        </button>
      )}
    </div>
  );
}

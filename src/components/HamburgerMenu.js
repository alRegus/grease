import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import useHttp from "../hooks/useHttp";
import classes from "./HamburgerMenu.module.scss";

function HamburgerMenu() {
  const products = useHttp(`${process.env.REACT_APP_API}/categories.json`);

  const types = useHttp(`${process.env.REACT_APP_API}/types.json`);

  const brands = useHttp(`${process.env.REACT_APP_API}/brands.json`);

  const dispatch = useDispatch();

  const [slidingMenu, setSlidingMenu] = useState(false);
  const [slidingSecondMenu, setSlidingSecondMenu] = useState(false);
  const [sliderContent, setSliderContent] = useState("");
  const [typesFilter, setTypesFilter] = useState([]);
  const [brandsFilter, setBrandsFilter] = useState([]);

  const sliderHandler = () => {
    setSlidingMenu((prevState) => !prevState);
    if (slidingMenu) {
      dispatch({ type: "OVERFLOW_TOGGLE", payload: { overflow: "scroll" } });
    }
    if (slidingMenu === false) {
      dispatch({ type: "OVERFLOW_TOGGLE", payload: { overflow: "hidden" } });
    }
  };
  const typeHandler = (e) => {
    const category = e.target.textContent.toLowerCase();
    const filteredTypes = types.filter((type) =>
      type.typeName.includes(category)
    );
    setTypesFilter(filteredTypes);
    setSliderContent("types");
    setSlidingSecondMenu(true);
  };
  const brandHandler = () => {
    setBrandsFilter(brands);
    setSliderContent("brands");
    setSlidingSecondMenu(true);
  };
  const helpHandler = () => {
    setSliderContent("help");
    setSlidingSecondMenu(true);
  };
  const accHandler = () => {
    setSliderContent("acc");
    setSlidingSecondMenu(true);
  };
  const closeAllSlidersHandler = () => {
    setSlidingSecondMenu(false);
    setSlidingMenu(false);
    if (slidingMenu) {
      dispatch({ type: "OVERFLOW_TOGGLE", payload: { overflow: "scroll" } });
    }
    if (slidingMenu === false) {
      dispatch({ type: "OVERFLOW_TOGGLE", payload: { overflow: "hidden" } });
    }
  };

  const typeHandler2 = (e) => {
    const typeValue = e.target.textContent;
    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: [typeValue],
        used: false,
        deals: false,
        brand: [],
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
    closeAllSlidersHandler();
  };

  const brandHandler2 = (e) => {
    const brandValue = e.target.alt;
    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: [],
        used: false,
        deals: false,
        brand: [brandValue],
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
    closeAllSlidersHandler();
  };

  const displayTypes = typesFilter.map((type) => (
    <li key={type.typeName}>
      <Link to="/products-list" onClick={typeHandler2}>
        {type.typeName
          .split("-")
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
          })
          .join(" ")}
      </Link>
    </li>
  ));
  const displayBrands = brandsFilter.map((brand) => (
    <li key={brand.brandName}>
      <Link to="/products-list">
        <img
          onClick={brandHandler2}
          src={brand.brandImgUrl}
          alt={brand.brandName}
        />
      </Link>
    </li>
  ));

  return (
    <div className={classes["hamburger"]}>
      <div className={classes["hamburger-display"]} onClick={sliderHandler}>
        <hr />
        <hr />
        <hr />
      </div>
      <div
        className={classes["hamburger-sliding"]}
        style={
          slidingMenu
            ? {
                transform: "translateX(0vw)",
                opacity: "1",
                visibility: "visible",
              }
            : null
        }
      >
        <div className={classes["hamburger-sliding-close"]}>
          <span onClick={sliderHandler}>X</span>
        </div>
        <div className={classes["hamburger-sliding-acc"]}>
          <span onClick={accHandler}>My Account</span>
          <span onClick={helpHandler}>Help</span>
        </div>
        <div className={classes["hamburger-sliding-products"]}>
          <span>Products</span>
          <ul>
            {products.map((prod) => (
              <li onClick={typeHandler} key={prod}>
                {prod}
              </li>
            ))}
          </ul>
        </div>
        <div className={classes["hamburger-sliding-brands"]}>
          <span onClick={brandHandler}>Brands</span>
        </div>
        <div className={classes["hamburger-sliding-chat"]}>
          <Link onClick={closeAllSlidersHandler} to="/info/store">
            NYC Store
          </Link>
        </div>
      </div>
      <div
        className={classes["hamburger-secondary-sliding"]}
        style={
          slidingSecondMenu
            ? {
                transform: "translateX(0vw)",
                opacity: "1",
                visibility: "visible",
              }
            : null
        }
      >
        <div className={classes["hamburger-secondary-sliding-close"]}>
          <span onClick={() => setSlidingSecondMenu(false)}>Back</span>
          <span onClick={closeAllSlidersHandler}>X</span>
        </div>

        {sliderContent === "types" && (
          <ul className={classes["hamburger-secondary-sliding-types"]}>
            {displayTypes}
          </ul>
        )}
        {sliderContent === "brands" && (
          <ul className={classes["hamburger-secondary-sliding-brands"]}>
            {displayBrands}
          </ul>
        )}
        {sliderContent === "help" && (
          <div className={classes["hamburger-secondary-sliding-help"]}>
            <span>Help</span>
            <p>Call Us at 800-223-2500</p>
            <Link onClick={closeAllSlidersHandler} to="/help/contactUs">
              Send Us an Email
            </Link>
            <Link onClick={closeAllSlidersHandler} to="/help/trackOrder">
              Check My Order Status
            </Link>
            <Link onClick={closeAllSlidersHandler} to="/help/returnPolicy">
              Return Instructions
            </Link>
            <Link onClick={closeAllSlidersHandler} to="/info/store">
              Visit Our NYC Store
            </Link>
            <Link onClick={closeAllSlidersHandler} to="/info/customerService">
              Explore Customer Service
            </Link>
          </div>
        )}
        {sliderContent === "acc" && (
          <div className={classes["hamburger-secondary-sliding-acc"]}>
            <span>My Account</span>
            <Link onClick={closeAllSlidersHandler} to="/login">
              My Account
            </Link>
            <Link onClick={closeAllSlidersHandler} to="/login">
              Sign in
            </Link>
            <Link onClick={closeAllSlidersHandler} to="/login">
              Wishlist
            </Link>
            <Link onClick={closeAllSlidersHandler} to="/help/trackOrder">
              Order Status
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;

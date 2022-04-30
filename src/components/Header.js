import React, { useState } from "react";
import useHttp from "../hooks/useHttp";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logo from "../instruments-logo.png";
import classes from "./Header.module.scss";

function Header() {
  const [instrumentTypesState, setInstrumentTypesState] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const instrumentTypes = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/types.json"
  );
  const instrumentCategories = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  );
  const instrumentBrands = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/brands.json"
  );

  const getTypesHandler = (e) => {
    const category = e.target.textContent.toLowerCase();

    const filteredTypes = instrumentTypes.filter((type) =>
      type.typeName.includes(category)
    );

    setInstrumentTypesState(filteredTypes);
  };

  const categoryRouteHandler = (e) => {
    const category = e.target.textContent.toLowerCase();

    dispatch({ type: "GET_CATEGORY_ROUTE", payload: category });
  };

  const displayInstrumentsCategories = instrumentCategories.map((category) => (
    <div
      onMouseOver={getTypesHandler}
      onClick={categoryRouteHandler}
      key={category}
    >
      <Link to="/category">{category}</Link>
    </div>
  )); //тут поменял li чтобы уьрать ошибку div, надо продумать структуру получше тут

  const typeHandler = (e) => {
    const typeValue = e.target.textContent;

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: typeValue,
        used: false,
        deals: false,
        brand: [],
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
  };

  const displayInstrumentsTypes = instrumentTypesState.map((type) => (
    <Link to="/products-list" key={type.typeName}>
      <li onClick={typeHandler}>
        {type.typeName
          .split("-")
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
          })
          .join(" ")}
      </li>
    </Link>
  )); //тут ошибка li

  const brandHandler = (e) => {
    const brandValue = e.target.alt;
    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: [],
        used: false,
        deals: false,
        brand: brandValue,
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
  };

  const displayInstrumentsBrands = instrumentBrands.map((brand) => (
    <Link to="/products-list" key={brand.brandName}>
      <div onClick={brandHandler}>
        <img src={brand.brandImgUrl} alt={brand.brandName} />
      </div>
    </Link>
  ));

  const usedHandler = () => {
    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: [],
        used: true,
        deals: false,
        brand: [],
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
  };

  const dealsHandler = () => {
    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: [],
        used: false,
        deals: true,
        brand: [],
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: searchValue,
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

    navigate("products-list");
  };

  return (
    <header className={classes["header"]}>
      <Link to="/">
        <div className={classes["logo-container"]}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <nav>
        <ul>
          <li className={classes["products-show"]}>
            Product
            <div className={classes["products-details-nav"]}>
              <div className={classes["products-details-nav-categories"]}>
                {displayInstrumentsCategories}
              </div>
              <div className={classes["products-details-nav-types"]}>
                {displayInstrumentsTypes}
              </div>
            </div>
          </li>
          <li className={classes["brand-show"]}>
            Brands
            <div className={classes["brands-details-nav"]}>
              <h2>Featured Brands:</h2>
              <div className={classes["brands-details-nav-items"]}>
                {displayInstrumentsBrands}
              </div>
            </div>
          </li>
          <li onClick={usedHandler}>
            <Link to="/products-list">Used</Link>
          </li>
          <li onClick={dealsHandler}>
            <Link to="/products-list">Deals</Link>
          </li>
        </ul>
      </nav>
      <div className={classes["search-container"]}>
        <form onSubmit={searchHandler}>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className={classes["auth-cart-container"]}>
        <Link to="/login">
          <div className={classes["auth-container"]}>
            <i className="far fa-user-circle"></i>
            <div>
              <span>Sign In</span>
              <p>My Account</p>
            </div>
            <div className={classes["account-options-container"]}>
              <ul>
                <li>
                  <Link to="/login">My Account</Link>
                </li>
                <li>Order Status</li>
                <li>
                  <Link to="/help">Help</Link>
                </li>
              </ul>
            </div>
          </div>
        </Link>
        <div className={classes["cart-container"]}>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;

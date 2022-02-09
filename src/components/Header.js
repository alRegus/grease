import React, { useState } from "react";
import useHttp from "../hooks/useHttp";
import { useDispatch } from "react-redux";

import logo from "../instruments-logo.png";
import classes from "./Header.module.scss";

function Header() {
  const [instrumentTypesState, setInstrumentTypesState] = useState([]);

  const dispatch = useDispatch();

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
      {category}
    </div>
  )); //тут поменял li чтобы уьрать ошибку div, надо продумать структуру получше тут

  const displayInstrumentsTypes = instrumentTypesState.map((type) => (
    <li key={type.typeName}>
      {type.typeName
        .split("-")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.substring(1);
        })
        .join(" ")}
    </li>
  )); //тут ошибка li

  const displayInstrumentsBrands = instrumentBrands.map((brand) => (
    <div key={brand.brandName}>
      <img src={brand.brandImgUrl} alt={brand.brandName} />
    </div>
  ));

  return (
    <header className={classes["header"]}>
      <div className={classes["logo-container"]}>
        <img src={logo} alt="logo" />
      </div>
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
          <li>Used</li>
          <li>Deals</li>
        </ul>
      </nav>
      <div className={classes["search-container"]}>
        <input type="text" placeholder="Search" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className={classes["auth-cart-container"]}>
        <div className={classes["auth-container"]}>
          <i className="far fa-user-circle"></i>
          <div>
            <span>Sign In</span>
            <p>My Account</p>
          </div>
          <div className={classes["account-options-container"]}>
            <ul>
              <li>My Account</li>
              <li>Order Status</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className={classes["cart-container"]}>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;

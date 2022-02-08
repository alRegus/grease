import React from "react";

import logo from "../instruments-logo.png";
import classes from "./Header.module.scss";

function Header() {
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
                {/* {displayCategories} */}
              </div>
              <div className={classes["products-details-nav-types"]}>
                {/* {displayTypes} */}
              </div>
            </div>
          </li>
          <li className={classes["brand-show"]}>
            Brands
            <div className={classes["brands-details-nav"]}>
              <h2>Featured Brands:</h2>
              <div className={classes["brands-details-nav-items"]}>
                {/* {displayBrands} */}
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

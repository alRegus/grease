import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./ProductsListPage.module.scss";
import ProductsList from "../components/products/ProductsList";
import ProductsSort from "../components/products/ProductsSort";
import ProductsFilterMenu from "../components/products/ProductsFilterMenu";
import useWidth from "../hooks/useWidth";

export default function ProductsListPage() {
  const filterParams = useSelector((state) => state.filter);
  const displayFilterMenu = useSelector((state) => state.display.display);

  const dispatch = useDispatch();
  const windowWidth = useWidth();

  let filteredParamValues = [];
  for (const [key, value] of Object.entries(filterParams)) {
    if (value) {
      filteredParamValues.push(value);
      const filteredOutBoolean = filteredParamValues.filter(
        (param) => param !== true
      );
      filteredParamValues.length = 0;
      filteredParamValues.push(filteredOutBoolean);
    }
    if (key === "deals" && value)
      filteredParamValues.push("Great Deals on Musical Instruments");
    if (key === "used" && value)
      filteredParamValues.push("Used Musical Instruments");
    if (key === "priceRange" && value.includes(49)) {
      filteredParamValues.push("Under 50$");
    }
    if (key === "priceRange" && value.includes(50)) {
      filteredParamValues.push("From 50$ to 100$");
    }
    if (key === "priceRange" && value.includes(249)) {
      filteredParamValues.push("From 100$ to 250$");
    }
    if (key === "priceRange" && value.includes(500)) {
      filteredParamValues.push("From 250$ to 500$");
    }
    if (key === "priceRange" && value.includes(501)) {
      filteredParamValues.push("Over 500$");
    }
    if (key === "rating" && value.includes(2)) {
      filteredParamValues.push("Less then 3 stars");
    }
    if (key === "rating" && value.includes(3)) {
      filteredParamValues.push("From 3 stars");
    }
    if (key === "rating" && value.includes(4)) {
      filteredParamValues.push("From 4 stars");
    }
    if (key === "discount" && value.includes(10)) {
      filteredParamValues.push("Discount 10% or more");
    }
    if (key === "discount" && value.includes(25)) {
      filteredParamValues.push("Discount 25% or more");
    }
    if (key === "discount" && value.includes(50)) {
      filteredParamValues.push("Discount 50% or more");
    }
  }

  dispatch({
    type: "GET_FILTERED_PARAM_VALUES",
    payload: filteredParamValues
      .flat(7)
      .filter((item) => typeof item === "string")
      .join(" > "),
  });

  return (
    <section className={classes["products"]}>
      {windowWidth > 801 && (
        <>
          <h1>
            {filteredParamValues
              .flat(7)
              .filter((item) => typeof item === "string")
              .join(" > ")}
          </h1>
          <div className={classes["products-page"]}>
            <div className={classes["products-page-filter"]}>
              <ProductsFilterMenu />
            </div>
            <div className={classes["products-page-list"]}>
              <ProductsSort />
              <ProductsList />
            </div>
          </div>
        </>
      )}
      {windowWidth <= 801 && (
        <>
          <h1>
            {filteredParamValues
              .flat(7)
              .filter((item) => typeof item === "string")
              .join(" > ")}
          </h1>
          {displayFilterMenu && <ProductsFilterMenu />}
          <div className={classes["products-page-list"]}>
            <ProductsSort />
            <ProductsList />
          </div>
        </>
      )}
    </section>
  );
}

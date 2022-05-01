import React from "react";
import { useSelector } from "react-redux";

import classes from "./ProductsListPage.module.scss";
import ProductsList from "../components/products/ProductsList";
import ProductsSort from "../components/products/ProductsSort";
import ProductsFilterMenu from "../components/products/ProductsFilterMenu";

export default function ProductsListPage() {
  const filterParams = useSelector((state) => state.filter);

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

  return (
    <section className={classes["products"]}>
      <h1>
        {filteredParamValues
          .flat()
          .join(" ")
          .split(",")
          .filter(
            (item) =>
              item !== "" &&
              item !== " " &&
              item !== "1" &&
              item !== "49" &&
              item !== "50" &&
              item !== "100" &&
              item !== "249" &&
              item !== "250" &&
              item !== "500" &&
              item !== "501" &&
              item !== "9999999999" &&
              item !== "2 " &&
              item !== "3" &&
              item !== "4" &&
              item !== "5 " &&
              item !== " 10" &&
              item !== " 25" &&
              item !== " 50"
          )
          .join(" > ")
          .replace("2 Less then 3 stars", "Less then 3 stars")
          .replace("5 From 3 stars", "From 3 stars")
          .replace("5 From 4 stars", "From 4 stars")
          .replace("100 Discount 10% or more", "Discount 10% or more")
          .replace("100 Discount 25% or more", "Discount 25% or more")
          .replace("100 Discount 50% or more", "Discount 50% or more")}
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
    </section>
  );
}

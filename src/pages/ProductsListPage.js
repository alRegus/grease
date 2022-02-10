import React from "react";
import { useSelector } from "react-redux";

import ProductsList from "../components/products/ProductsList";
import ProductsSort from "../components/products/ProductsSort";

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
  }

  return (
    <section>
      <h1>{filteredParamValues.flat().join(" ")}</h1>
      <ProductsSort />
      <ProductsList />
    </section>
  );
}

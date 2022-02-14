import React from "react";

import classes from "./ProductPage.module.scss";
import ProductDetails from "../components/product/ProductDetails";

export default function ProductPage() {
  return (
    <section className={classes["product"]}>
      <ProductDetails />
    </section>
  );
}

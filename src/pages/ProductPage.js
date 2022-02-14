import React from "react";

import classes from "./ProductPage.module.scss";
import ProductDetails from "../components/product/ProductDetails";
import ProductReviews from "../components/product/ProductReviews";

export default function ProductPage() {
  return (
    <section className={classes["product"]}>
      <ProductDetails />
      <ProductReviews />
    </section>
  );
}

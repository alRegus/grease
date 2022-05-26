import React from "react";

import ProductDetails from "../components/product/ProductDetails";
import ProductReviews from "../components/product/ProductReviews";

export default function ProductPage() {
  return (
    <section>
      <ProductDetails />
      <ProductReviews />
    </section>
  );
}

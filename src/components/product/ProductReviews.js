import React from "react";
import useHttp from "../../hooks/useHttp";
import { useParams } from "react-router-dom";

import classes from "./ProductReviews.module.scss";

export default function ProductReviews() {
  const { id } = useParams();

  const ProductReviews = useHttp(
    `https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/allProducts/${id}/reviews.json`
  );

  const reviews = ProductReviews.map((review) => (
    <div key={review.user}>
      <div>{review.user}</div>
      <div>{review.commentBody}</div>
      <div>{review.date}</div>
    </div>
  ));
  return <section className={classes["product-reviews"]}>{reviews}</section>;
}

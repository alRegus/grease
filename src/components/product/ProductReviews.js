import React from "react";
import useHttp from "../../hooks/useHttp";
import { useParams } from "react-router-dom";

import classes from "./ProductReviews.module.scss";

export default function ProductReviews() {
  const { id } = useParams();

  const ProductReviews = useHttp(
    `https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/allProducts/${id}/reviews.json`
  );

  const reviews = ProductReviews ? (
    ProductReviews.map((review) => (
      <div key={review.date}>
        <div className={classes["product-reviews-user"]}>{review.user}</div>
        <div className={classes["product-reviews-comment"]}>
          {review.commentBody}
        </div>
        <div className={classes["product-reviews-date"]}>{review.date}</div>
      </div>
    ))
  ) : (
    <div className={classes["product-reviews-empty"]}>No Reviews Yet</div>
  );
  return <section className={classes["product-reviews"]}>{reviews}</section>;
}

import React from "react";
import useHttp from "../../hooks/useHttp";
import { useParams } from "react-router-dom";

import classes from "./ProductReviews.module.scss";

export default function ProductReviews() {
  const { id } = useParams();

  const ProductReviews = useHttp(
    `${process.env.REACT_APP_API}/allProducts/${id}/reviews.json`
  );

  const reviews = ProductReviews ? (
    ProductReviews.map((review) => (
      <div
        className={classes["product-reviews-container-review"]}
        key={review.date}
      >
        <div className={classes["product-reviews-container-review-user"]}>
          {review.user}
          <div
            className={classes["product-reviews-container-review-user-date"]}
          >
            {review.date}
          </div>
        </div>
        <div className={classes["product-reviews-container-review-comment"]}>
          {review.commentBody}
        </div>
      </div>
    ))
  ) : (
    <div className={classes["product-reviews-container-empty"]}>
      No Reviews Yet
    </div>
  );
  return (
    <section className={classes["product-reviews"]}>
      <div className={classes["product-reviews-container"]}>
        <h2>Reviews</h2>
        {reviews}
      </div>
    </section>
  );
}

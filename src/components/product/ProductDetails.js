import React from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";

import classes from "./ProductDetails.module.scss";

export default function ProductDetails() {
  const { id } = useParams();

  const product = useHttp(
    `https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/allProducts/${id}.json`
  );
  /* const productBrandImageUrl =  */

  return (
    <section className={classes["product-details"]}>
      <div className={classes["product-details-imgContainer"]}>
        <img src={product.productImgUrl} alt={product.name} />
      </div>
      <div className={classes["product-details-info"]}>
        <h1>{product.name}</h1>
        <div className={classes["product-details-info-rating"]}>
          <span>
            {(product.totalVotesValue / product.votes).toFixed(2)} (
            {product.votes}) votes
          </span>
        </div>
        <div className={classes["product-details-info-price"]}>
          ${product.price}
        </div>
        <button>Add to Cart</button>
        <button>Add to wish list</button>
        <div className={classes["product-details-info-stock"]}>In stock</div>
        <div className={classes["product-details-info-condition"]}>
          Condition: {`${product.used ? "Used" : "New"}`}
        </div>
      </div>
    </section>
  );
}

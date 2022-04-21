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
      <div className={classes["product-details-container"]}>
        <div className={classes["product-details-container-imgContainer"]}>
          <img src={product.productImgUrl} alt={product.name} />
        </div>
        <div className={classes["product-details-container-info"]}>
          <h1>{product.name}</h1>
          <div className={classes["product-details-container-info-rating"]}>
            <span>
              {(product.totalVotesValue / product.votes).toFixed(2)} (
              {product.votes}) votes
            </span>
          </div>
          <div className={classes["product-details-container-info-price"]}>
            ${product.price}
          </div>
          <div className={classes["product-details-container-info-btn"]}>
            <button>Add to Cart</button>
            <a href="">Add to wish list</a>
          </div>
          <div className={classes["product-details-container-info-stock"]}>
            In stock
          </div>
          <div className={classes["product-details-container-info-condition"]}>
            Condition:{" "}
            <span
              style={
                product.used ? { color: "red" } : { color: "rgb(24, 177, 24)" }
              }
            >{`${product.used ? "Used" : "New"}`}</span>
          </div>
          <div
            className={classes["product-details-container-info-description"]}
          >
            {product.description}
          </div>
        </div>
      </div>
    </section>
  );
}

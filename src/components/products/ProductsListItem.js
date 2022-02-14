import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProductsListItem.module.scss";

export default function ProductsListItem({
  name,
  totalVotesValue,
  votesQuantity,
  price,
  imgURL,
  prodId,
}) {
  const rating = (totalVotesValue / votesQuantity).toFixed(2);

  return (
    <article className={classes["product-list-item"]}>
      <div className={classes["product-list-item-img-container"]}>
        <Link to={`/product/${prodId}`}>
          <img src={imgURL} alt={name} />
        </Link>
      </div>
      <div className={classes["product-list-item-info-container"]}>
        <Link to={`/product/${prodId}`}>
          <h2>{name}</h2>
        </Link>
        <span>
          {rating} ({votesQuantity})
        </span>
        <span>In Stock</span>
      </div>
      <div className={classes["product-list-item-price-container"]}>
        <em>Our price</em>
        <strong>{price} $</strong>
        <button>Add to Cart</button>
      </div>
    </article>
  );
}

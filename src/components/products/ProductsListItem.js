import React from "react";

import classes from "./ProductsListItem.module.scss";

export default function ProductsListItem({
  name,
  totalVotesValue,
  votesQuantity,
  price,
  imgURL,
}) {
  const rating = (totalVotesValue / votesQuantity).toFixed(2);

  return (
    <div className={classes["product-list-item"]}>
      <div className={classes["product-list-item-img-container"]}>
        <img src={imgURL} alt={name} />
      </div>
      <div className={classes["product-list-item-info-container"]}>
        <h2>{name}</h2>
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
    </div>
  );
}

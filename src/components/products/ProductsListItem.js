import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./ProductsListItem.module.scss";

export default function ProductsListItem({
  name,
  totalVotesValue,
  votesQuantity,
  price,
  imgURL,
  prodId,
}) {
  const viewParam = useSelector((state) => state.view.view);
  console.log(viewParam); //!!иправить то что 39 раз повторяется
  const rating = (totalVotesValue / votesQuantity).toFixed(2);

  return (
    <article
      style={
        viewParam === "list"
          ? { display: "grid", gridTemplateColumns: "30% 40% 30%" }
          : {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }
      }
      className={classes["product-list-item"]}
    >
      <div className={classes["product-list-item-img-container"]}>
        <Link to={`/product/${prodId}`}>
          <img src={imgURL} alt={name} />
        </Link>
      </div>
      <div className={classes["product-list-item-info-container"]}>
        <Link to={`/product/${prodId}`}>{name}</Link>
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

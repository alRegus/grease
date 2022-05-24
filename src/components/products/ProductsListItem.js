import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
  const rating = (totalVotesValue / votesQuantity).toFixed(2);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const productInfo = {
      name,
      price,
      imgURL,
      prodId,
    };
    if (localStorage) {
      let cart;
      if (!localStorage["cart"]) cart = [];
      else cart = JSON.parse(localStorage["cart"]);
      if (!(cart instanceof Array)) cart = [];
      cart.push(productInfo);

      const removedDuplicates = cart.reduce((acc, current) => {
        const x = acc.find((item) => item.prodId === current.prodId);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

      localStorage.setItem("cart", JSON.stringify(removedDuplicates));

      dispatch({
        type: "GET_CART",
        payload: JSON.parse(localStorage.getItem("cart")),
      });
    }
  };

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
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </article>
  );
}

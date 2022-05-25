import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useHttp from "../../hooks/useHttp";

import classes from "./ProductDetails.module.scss";

export default function ProductDetails() {
  const { id } = useParams();

  const product = useHttp(
    `${process.env.REACT_APP_API}/allProducts/${id}.json`
  );

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const productInfo = {
      name: product.name,
      price: product.price,
      imgURL: product.productImgUrl,
      prodId: product.id,
      discount: product.discount,
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
    <section className={classes["product-details"]}>
      <div className={classes["product-details-container"]}>
        <div className={classes["product-details-container-imgContainer"]}>
          <img src={product.productImgUrl} alt={product.name} />
          {product.discount && (
            <div
              style={{
                position: "absolute",
                fontWeight: "bold",
                right: "-8px",
                top: " 2px",
                color: "#fff",
                backgroundColor: "rgb(226, 95, 19)",
                padding: "1px 10px",
                borderRadius: "5px",
                transform: "rotate(24deg)",
                fontSize: "clamp(0.8rem,2vw,1rem)",
              }}
            >
              {product.discount}% off
            </div>
          )}
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
            {product.discount && (
              <span style={{ textDecoration: "line-through" }}>
                {(
                  product.price +
                  product.price * (product.discount / 100) * 2
                ).toFixed(2)}
                $
              </span>
            )}
            ${product.price}
          </div>
          <div className={classes["product-details-container-info-btn"]}>
            <button onClick={addToCartHandler}>Add to Cart</button>
            <Link to="/cart">Go To Cart</Link>
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

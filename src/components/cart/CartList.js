import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import classes from "./CartList.module.scss";

export default function CartList() {
  const cartStore = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  /* const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    setCart(cartData);
  }, []); */ //будет бесконечно обновляться так как зависимость массив и сравнение массивов с одинаковым содержимым будет давать false

  let displayCart;

  const removeFromCartHandler = (e) => {
    const cartWithRemovedItem = cartStore.filter(
      (item) =>
        item.name !==
        e.target.closest("article").children[1].children[0].textContent
    );

    localStorage.setItem("cart", JSON.stringify(cartWithRemovedItem));
    /* setCart(JSON.parse(localStorage.getItem("cart"))); */
    dispatch({
      type: "GET_CART",
      payload: JSON.parse(localStorage.getItem("cart")),
    });
  };

  useEffect(() => {
    console.log(cartStore);
  }, [cartStore]);

  if (cartStore) {
    displayCart = cartStore.map((cartItem) => (
      <article>
        <div>
          <img src={cartItem.imgURL} alt={cartItem.name} />
        </div>
        <div>
          <Link to={`/product/${cartItem.prodId}`}>{cartItem.name}</Link>
          <p className={classes["stock"]}>In Stock</p>
        </div>
        <div>
          <p>${cartItem.price}</p>
        </div>
        <i onClick={removeFromCartHandler} className="fa-solid fa-xmark"></i>
      </article>
    ));
  }
  if (cartStore.length === 0) {
    displayCart = <p>Cart is Empty</p>;
  }
  return (
    <section className={classes["cart-list"]}>
      <h2>
        Ship{" "}
        <span>({cartStore.length === 0 ? 0 : displayCart.length} items)</span>
      </h2>
      <div>{displayCart}</div>
    </section>
  );
}

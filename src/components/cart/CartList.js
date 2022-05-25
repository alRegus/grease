import React, { useEffect } from "react";
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
          {cartItem.discount && (
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
              {cartItem.discount}% off
            </div>
          )}
        </div>
        <div>
          <Link to={`/product/${cartItem.prodId}`}>{cartItem.name}</Link>
          <p className={classes["stock"]}>In Stock</p>
        </div>
        <div>
          {cartItem.discount && (
            <span style={{ textDecoration: "line-through" }}>
              {(
                cartItem.price +
                cartItem.price * (cartItem.discount / 100) * 2
              ).toFixed(2)}
              $
            </span>
          )}
          <p style={{ fontWeight: "bold" }}>${cartItem.price}</p>
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

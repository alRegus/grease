import React from "react";

import CartHeader from "../components/cart/CartHeader";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import classes from "./CartPage.module.scss";

export default function CartPage() {
  return (
    <section className={classes["cart-page"]}>
      <CartHeader />
      <div className={classes["cart-page-container"]}>
        <CartList />
        <CartSummary />
      </div>
    </section>
  );
}

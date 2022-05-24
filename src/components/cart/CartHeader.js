import React from "react";
import { Link } from "react-router-dom";

import classes from "./CartHeader.module.scss";

export default function CartHeader() {
  return (
    <section className={classes["cart-header"]}>
      <div>
        <Link to="/products-list">
          <i class="fa-solid fa-angle-left"></i> Continue Shopping
        </Link>
        <h1>Shopping Cart</h1>
      </div>
      <div>
        <p>
          <Link to="/login">Sign In</Link> to earn up to 649 points on this
          purchase!
        </p>
        <p>
          <i class="fa-solid fa-phone"></i> Need Help? Call{" "}
          <a href="tel:800-811-4002">800-811-4002</a>
        </p>
      </div>
    </section>
  );
}

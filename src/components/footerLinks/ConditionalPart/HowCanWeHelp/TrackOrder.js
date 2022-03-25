import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./TrackOrder.module.scss";

export default function TrackOrder() {
  const [errBool, setErrBool] = useState(false);

  const errorHandler = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") setErrBool(true);
  };

  return (
    <section className={classes["track-order"]}>
      <h2>Track Your Order</h2>

      <div className={classes["track-order-cont"]}>
        <form onSubmit={errorHandler}>
          {errBool && (
            <p className={classes["track-order-err"]}>
              A error happened: This order doesn't exist, Please make sure that
              all the information is valid
            </p>
          )}
          <div>
            <label htmlFor="">Order Number</label>
            <input type="text" required />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className={classes["track-order-text"]}>
          <p>
            To see the status of your order, enter the order number and email
            address associated with that order. Questions?
            <Link to="/help/customerService"> Get in touch</Link>
          </p>
        </div>
      </div>
      <p className={classes["track-order-bottom"]}>
        If you are a returning customer
        <Link to="/login"> log in to check your order status.</Link>
      </p>
    </section>
  );
}

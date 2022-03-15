import React from "react";

export default function TrackOrder() {
  return (
    <section>
      <h2>Track Your Order</h2>
      <div>
        <form>
          <div>
            <label htmlFor="">Order Number</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <p>
            To see the status of your order, enter the order number and email
            address associated with that order. Questions?
            <a href=""> Get in touch</a>
          </p>
        </div>
      </div>
      <p>
        If you are a returning customer{" "}
        <a href="">log in to check your order status.</a>
      </p>
    </section>
  );
}

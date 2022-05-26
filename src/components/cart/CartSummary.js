import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classes from "./CartSummary.module.scss";

export default function CartSummary() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartStore = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    const totalPriceCounted =
      cartStore.length === 0
        ? 0
        : cartStore.map((item) => item.price).reduce((a, b) => a + b, 0);

    setTotalPrice(totalPriceCounted);
  }, [cartStore]);

  const checkoutHandler = () => {
    navigate("/login");
  };

  const paypalHandler = () => {
    window.location.href = "https://www.paypal.com";
  };

  const edgeCreditHandler = () => {
    navigate("/login");
  };

  return (
    <section className={classes["cart-summary"]}>
      <h2>Cart Summary</h2>
      <div className={classes["cart-summary-total"]}>
        <div>
          <p>Subtotal</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div>
          <p>Shipping</p> <p>${(totalPrice * 0.1).toFixed(2)}</p>
        </div>
        <div>
          <p>Taxes</p>
          <p>${(totalPrice * 0.2).toFixed(2)}</p>
        </div>
        <div className={classes["cart-summary-total-order"]}>
          <div>
            <h3>Order Total</h3>
            <h3>
              ${(totalPrice + totalPrice * 0.1 + totalPrice * 0.2).toFixed(2)}
            </h3>
          </div>
          <button onClick={checkoutHandler}>Proceed to Checkout</button>
        </div>
      </div>
      <div className={classes["cart-summary-paypal"]}>
        <button onClick={paypalHandler}>
          <p>
            Pay<span>Pal</span>
          </p>
        </button>
      </div>
      <div className={classes["cart-summary-edge"]}>
        <p>
          <span>$119</span>/mo suggested payments with 6‑month special
          financing. Or enjoy 5% off† every day.
        </p>
        <button onClick={edgeCreditHandler}>
          Apply for the Grease Edge Credit Card
        </button>
      </div>
      <div className={classes["cart-summary-help"]}>
        <div>
          <h3>We're Here For You</h3>
          <p>We want to remove the stress of buying online.</p>
          <p>
            <Link to="/help/shippingDelivery">
              Common questions about shipping
            </Link>
          </p>
          <p>
            <Link to="/help/returnPolicy">View our Return Policy</Link>
          </p>
        </div>
        <div>
          <h3>Security 100% Guaranteed</h3>
          <p>
            Your order is safe & secure guarded by state-of-the-art technology.
          </p>
        </div>
        <div>
          <h3>We Value Your Privacy</h3>
          <p>
            Grease will not sell or distribute your personal information under
            any circumstances.
          </p>
          <p>
            <Link to="/help/privacy">View our Privacy Policy</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

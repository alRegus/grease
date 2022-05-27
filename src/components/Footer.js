import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.scss";

export default function Footer() {
  const [emailErr, setEmailErr] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setEmailErr((prevState) => !prevState);
  };

  return (
    <footer>
      <section className={classes["help-feedback-container"]}>
        <div className={classes["help-feedback-container-services"]}>
          <h3>How Can We Help?</h3>
          <ul>
            <li>
              <Link to="/help/customerService">Customer Service</Link>
            </li>
            <li>
              <Link to="/help/trackOrder">Track Your Order</Link>
            </li>
            <li>
              <Link to="/help/shippingDelivery">Shipping & Delivery</Link>
            </li>
            <li>
              <Link to="/help/storePickups">In-Store Pickup</Link>
            </li>
            <li>
              <Link to="/help/internationalOrders">International Orders</Link>
            </li>
            <li>
              <Link to="/help/returnPolicy">Return Policy</Link>
            </li>
            <li>
              <Link to="/help/contactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/help/warranties">Warranties</Link>
            </li>
          </ul>
        </div>
        <div className={classes["help-feedback-container-shopping-help"]}>
          <h3>Shopping Help</h3>
          <ul>
            <li>
              <Link to="/nspc/giftCards">Gift Cards</Link>
            </li>
            <li>
              <Link to="/nspc/vip360">VIP360</Link>
            </li>
            <li>
              <Link to="/nspc/rewards">Rewards</Link>
            </li>
            <li>
              <Link to="/nspc/edgeCredit">Grease Edge Credit Card</Link>
            </li>
            <li>
              <Link to="/nspc/studentDiscount">Student Discounts</Link>
            </li>
          </ul>
        </div>
        <div className={classes["help-feedback-container-company-info"]}>
          <h3>Company Info</h3>
          <ul>
            <li>
              <Link to="/info/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/info/history">Our History</Link>
            </li>
            <li>
              <Link to="/info/store">Our Store</Link>
            </li>
          </ul>
        </div>
        <div className={classes["help-feedback-container-feedback"]}>
          <div
            className={classes["help-feedback-container-feedback-newsletter"]}
          >
            <h3>Newsletter Signup</h3>
            <p>
              Sign up to get sales alerts, product news, exclusive offers, and
              more!
            </p>
            <form
              className={
                classes["help-feedback-container-feedback-newsletter-input"]
              }
              onSubmit={submitHandler}
            >
              <input
                type="email"
                placeholder="Email Address"
                required
                style={emailErr ? { border: "1px solid #d83220" } : null}
              />
              <button>Submit</button>
            </form>
            {emailErr && (
              <p style={{ color: "#d83220" }}>
                ✖ Your email address is not valid
              </p>
            )}
          </div>
          <div className={classes["help-feedback-container-feedback-social"]}>
            <h3>Follow Us</h3>
            <div
              className={
                classes["help-feedback-container-feedback-social-items"]
              }
            >
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={classes["copyright"]}>
        <div className="copyright-inner">
          <p>
            Copyright Grease Camera, Inc. All rights reserved. |{" "}
            <Link to="/help/privacy">Privacy Policy</Link> |{" "}
            <Link to="/help/termsAndConditions">Terms of Use</Link> | 42 West
            18th Street New York, NY 10011 (
            <Link to="/info/store">Directions</Link>) | 800.223.2500
          </p>
        </div>
      </section>
    </footer>
  );
}

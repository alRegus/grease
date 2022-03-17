import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.scss";

export default function Footer() {
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
            <Link to="/help/storePickups">In-Store Pickup</Link>
            <Link to="/help/internationalOrders">International Orders</Link>
            <Link to="/help/returnPolicy">Return Policy</Link>
            <Link to="/help/contactUs">Contact Us</Link>
            <Link to="/help/warranties">Warranties</Link>
          </ul>
        </div>
        <div className={classes["help-feedback-container-shopping-help"]}>
          <h3>Shopping Help</h3>
          <ul>
            <li>Gift Cards</li>
            <li>VIP360</li>
            <li>Rewards</li>
            <li>Grease Edge Credit Card</li>
            <li>Student Discounts</li>
          </ul>
        </div>
        <div className={classes["help-feedback-container-company-info"]}>
          <h3>Company Info</h3>
          <ul>
            <li>About Us</li>
            <li>Our History</li>
            <li>Our Store</li>
            <li>Careers</li>
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
            >
              <input type="email" placeholder="Email Address" />
              <button>Submit</button>
            </form>
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
                  <i className="fab fa-facebook-square"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
                <li>
                  <i className="fab fa-youtube"></i>
                </li>
                <li>
                  <i className="fab fa-instagram-square"></i>
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
            <span>Privacy Policy</span> | <span>Terms of Use</span> | 42 West
            18th Street New York, NY 10011 (<span>Directions</span>) |
            800.223.2500
          </p>
        </div>
      </section>
    </footer>
  );
}

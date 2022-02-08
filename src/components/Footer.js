import React from "react";

import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <section className={classes["help-feedback-container"]}>
        <div className={classes["help-feedback-container-services"]}>
          <h3>How Can We Help?</h3>
          <ul>
            <li>Customer Service</li>
            <li>Track Your Order</li>
            <li>Shipping & Delivery</li>
            <li>In-Store Pickup</li>
            <li>International Orders</li>
            <li>Return Policy</li>
            <li>Contact Us</li>
            <li>Warranties</li>
          </ul>
        </div>
        <div className={classes["help-feedback-container-shopping-help"]}>
          <h3>Shopping Help</h3>
          <ul>
            <li>Gift Cards</li>
            <li>VIP360</li>
            <li>Rewards</li>
            <li>Rebate Center</li>
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

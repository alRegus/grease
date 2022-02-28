import React from "react";

import classes from "./LetUsHelpYou.module.scss";

export default function LetUsHelpYou() {
  return (
    <section className={classes["help-letUs"]}>
      <h2>Quick Links</h2>
      <div className={classes["help-letUs-quick"]}>
        <div>
          <ul>
            <h2>Products Info</h2>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Refurbished</a>
            </li>
            <li>
              <a href="#">Grey Market</a>
            </li>
            <li>
              <a href="#">Open Box</a>
            </li>
            <li>
              <a href="#">Rebates</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Orders Info</h2>
            <li>
              <a href="#">Ordering Information</a>
            </li>
            <li>
              <a href="#">Payment Methods</a>
            </li>
            <li>
              <a href="#">Safe Shopping</a>
            </li>
            <li>
              <a href="#">Shipping Info</a>
            </li>
            <li>
              <a href="#">International</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Support</h2>
            <li>
              <a href="#">Store Pickup</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Hours of Operation</a>
            </li>
            <li>
              <a href="#">Maps & Directions</a>
            </li>
            <li>
              <a href="#">Department & Services</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["help-letUs-letUs"]}>
        <h2>Let Us Help You</h2>
        <div className={classes['"help-letUs-letUs-questionsHeader']}>
          <h2>Most Frequently Asked Questions</h2>
          <span>
            <a href="#">All FAQs</a>
          </span>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">How can I check the status of my order?</a>
            </li>
            <li>
              <a href="#">What happens if my item is on backorder?</a>
            </li>
            <li>
              <a href="#">How do I return an item?</a>
            </li>
            <li>
              <a href="#">What is your return policy?</a>
            </li>
            <li>
              <a href="#">How do I cancel an order</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["help-letUs-shipping"]}>
        <h2>Shipping Information</h2>
        <ul>
          <li>
            <a href="#">Shipping Information</a>
          </li>
          <li>
            <a href="#">Delivery Times</a>
          </li>
          <li>
            <a href="#">Delivery Requirements</a>
          </li>
          <li>
            <a href="#">Damaged / Missing items upon delivery</a>
          </li>
          <li>
            <a href="#">International Shipments</a>
          </li>
        </ul>
      </div>
      <div className={classes["help-letUs-about"]}>
        <h2>About Our Products</h2>
        <span>Read on for information about our products.</span>
        <ul>
          <li>
            <a href="#">Refurbished Information</a>
          </li>
          <li>
            <a href="#">Grey Market Information</a>
          </li>
          <li>
            <a href="#">Open Box</a>
          </li>
          <li>
            <a href="#">Gift Certificates</a>
          </li>
          <li>
            <a href="#">Rebates</a>
          </li>
          <li>
            <a href="#">Trade In Equipment</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

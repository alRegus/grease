import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/help/returnPolicy">Return Policy</Link>
            </li>
            <li>
              <Link to="#">Refurbished</Link>
            </li>
            <li>
              <Link to="#">Grey Market</Link>
            </li>
            <li>
              <Link to="#">Open Box</Link>
            </li>
            <li>
              <Link to="#">Rebates</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Orders Info</h2>
            <li>
              <Link to="#">Ordering Information</Link>
            </li>
            <li>
              <Link to="#">Payment Methods</Link>
            </li>
            <li>
              <Link to="#">Safe Shopping</Link>
            </li>
            <li>
              <Link to="#">Shipping Info</Link>
            </li>
            <li>
              <Link to="#">International</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Support</h2>
            <li>
              <Link to="#">Store Pickup</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Hours of Operation</Link>
            </li>
            <li>
              <Link to="#">Maps & Directions</Link>
            </li>
            <li>
              <Link to="#">Department & Services</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["help-letUs-letUs"]}>
        <h2>Let Us Help You</h2>
        <div className={classes["help-letUs-letUs-questionsHeader"]}>
          <h2>Most Frequently Asked Questions</h2>
          <span>
            <Link to="#">All FAQs</Link>
          </span>
        </div>
        <div>
          <ul>
            <li>
              <Link to="#">How can I check the status of my order?</Link>
            </li>
            <li>
              <Link to="#">What happens if my item is on backorder?</Link>
            </li>
            <li>
              <Link to="#">How do I return an item?</Link>
            </li>
            <li>
              <Link to="#">What is your return policy?</Link>
            </li>
            <li>
              <Link to="#">How do I cancel an order</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["help-letUs-shipping"]}>
        <h2>Shipping Information</h2>
        <ul>
          <li>
            <Link to="#">Shipping Information</Link>
          </li>
          <li>
            <Link to="#">Delivery Times</Link>
          </li>
          <li>
            <Link to="#">Delivery Requirements</Link>
          </li>
          <li>
            <Link to="#">Damaged / Missing items upon delivery</Link>
          </li>
          <li>
            <Link to="#">International Shipments</Link>
          </li>
        </ul>
      </div>
      <div className={classes["help-letUs-about"]}>
        <h2>About Our Products</h2>
        <span>Read on for information about our products.</span>
        <ul>
          <li>
            <Link to="#">Refurbished Information</Link>
          </li>
          <li>
            <Link to="#">Grey Market Information</Link>
          </li>
          <li>
            <Link to="#">Open Box</Link>
          </li>
          <li>
            <Link to="#">Gift Certificates</Link>
          </li>
          <li>
            <Link to="#">Rebates</Link>
          </li>
          <li>
            <Link to="#">Trade In Equipment</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

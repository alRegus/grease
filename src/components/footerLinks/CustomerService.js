import React from "react";

import classes from "./CustomerService.module.scss";

export default function CustomerService() {
  return (
    <section className={classes["help-customer"]}>
      <a href="#" className={classes["help-customer-header"]}>
        Customer Service
      </a>
      <div>
        <h2>Let Us Help You</h2>
        <ul>
          <li>
            <a href="#">Track Your Order</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Departments & Services</a>
          </li>
          <li>
            <a href="#">Map and Directions</a>
          </li>
          <li>
            <a href="#">Affiliate Program</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Ordering Information</h2>
        <ul>
          <li>
            <a href="#">FAQ`s</a>
          </li>
          <li>
            <a href="#">Shipping & Delivery</a>
          </li>
          <li>
            <a href="#">In-Store Pickup</a>
          </li>
          <li>
            <a href="#">Buying and Selling Used</a>
          </li>
          <li>
            <a href="#">Return Policy</a>
          </li>
          <li>
            <a href="#">Warranties</a>
          </li>
          <li>
            <a href="#">Expired Rebates</a>
          </li>
          <li>
            <a href="#">International Orders</a>
          </li>
          <li>
            <a href="#">Payment Methods</a>
          </li>
          <li>
            <a href="#">Safe Shopping</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Ordering</a>
          </li>
          <li>
            <a href="#">General Information</a>
          </li>
          <li>
            <a href="#">Gift Certificates</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Ways to Shop</h2>
        <ul>
          <li>
            <a href="#">Goverment Accounts</a>
          </li>
          <li>
            <a href="#">Corporate Accounts</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Downloadable Software</h2>
        <ul>
          <li>
            <a href="#">Downloadables</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

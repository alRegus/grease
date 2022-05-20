import React from "react";
import { HashLink } from "react-router-hash-link";

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
              <HashLink to="/help/returnPolicy">Return Policy</HashLink>
            </li>
            <li>
              <HashLink to="/help/GeneralInfo#refurbished-info">
                Refurbished
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/GeneralInfo#imported-info">
                Grey Market
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/GeneralInfo#open-box-info">Open Box</HashLink>
            </li>
            <li>
              <HashLink to="/help/GeneralInfo#claim-info">Rebates</HashLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Orders Info</h2>
            <li>
              <HashLink to="/help/ordering">Ordering Information</HashLink>
            </li>
            <li>
              <HashLink to="/help/paymentMethods">Payment Methods</HashLink>
            </li>
            <li>
              <HashLink to="/help/safeShopping">Safe Shopping</HashLink>
            </li>
            <li>
              <HashLink to="/help/shippingDelivery">Shipping Info</HashLink>
            </li>
            <li>
              <HashLink to="/help/internationalOrders">International</HashLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Support</h2>
            <li>
              <HashLink to="/help/storePickups">Store Pickup</HashLink>
            </li>
            <li>
              <HashLink to="/help/contactUs">Contact Us</HashLink>
            </li>
            <li>
              <HashLink to="/info/store">Hours of Operation</HashLink>
            </li>
            <li>
              <HashLink to="/info/store">Maps & Directions</HashLink>
            </li>
            <li>
              <HashLink to="/help/DepartmentsAndServices">
                Department & Services
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["help-letUs-letUs"]}>
        <h2>Let Us Help You</h2>
        <div className={classes["help-letUs-letUs-questionsHeader"]}>
          <h2>Most Frequently Asked Questions</h2>
          <span>
            <HashLink to="/help/faq">All FAQs</HashLink>
          </span>
        </div>
        <div>
          <ul>
            <li>
              <HashLink to="/help/ordering#check-order-status">
                How can I check the status of my order?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#order-backorder">
                What happens if my item is on backorder?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/returnPolicy">
                How do I return an item?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/returnPolicy">
                What is your return policy?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#cancel-order">
                How do I cancel an order
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["help-letUs-shipping"]}>
        <h2>Shipping Information</h2>
        <ul>
          <li>
            <HashLink to="/help/shippingDelivery">
              Shipping Information
            </HashLink>
          </li>
          <li>
            <HashLink to="/help/shippingDelivery#order-line">
              Delivery Times
            </HashLink>
          </li>
          <li>
            <HashLink to="/help/shippingDelivery#requirements">
              Delivery Requirements
            </HashLink>
          </li>
          <li>
            <HashLink to="/help/shippingDelivery#damage-missing">
              Damaged / Missing items upon delivery
            </HashLink>
          </li>
          <li>
            <HashLink to="/help/shippingDelivery#internationally">
              International Shipments
            </HashLink>
          </li>
        </ul>
      </div>
      <div className={classes["help-letUs-about"]}>
        <h2>About Our Products</h2>
        <span>Read on for information about our products.</span>
        <ul>
          <li>
            <HashLink to="/help/GeneralInfo#refurbished-info">
              Refurbished Information
            </HashLink>
          </li>
          <li>
            <HashLink to="/help/GeneralInfo#imported-info">
              Grey Market Information
            </HashLink>
          </li>
          <li>
            <HashLink to="/help/GeneralInfo#open-box-info">Open Box</HashLink>
          </li>
          <li>
            <HashLink to="/help/GiftCertificates">Gift Certificates</HashLink>
          </li>
          <li>
            <HashLink to="/help/GeneralInfo#claim-info">Rebates</HashLink>
          </li>
          <li>
            <HashLink to="/help/GeneralInfo#trade-in-info">
              Trade In Equipment
            </HashLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

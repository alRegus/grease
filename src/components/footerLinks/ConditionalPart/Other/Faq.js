import React from "react";
import { HashLink } from "react-router-hash-link";

import classes from "./Faq.module.scss";

export default function Faq() {
  return (
    <section className={classes["faq"]}>
      <h1>Frequently Asked Questions</h1>
      <div className={classes["faq-part"]}>
        <div className={classes["faq-part-header"]}>
          <h2>Order Information</h2>
        </div>
        <div className={classes["faq-part-body-links"]}>
          <ul>
            <li>
              <HashLink to="/help/ordering">What Is Grease?</HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#place-order">
                How Do I Place an Order?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#payment-methods">
                What Payment Methods Do You Accept?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#verify-order">
                How Can I Verify an Order?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#sales-tax-policy">
                What Is Your Sales Tax Policy?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#check-order-status">
                How Can I Check The Status of My Order?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#track-my-order">
                How Can I Track My Order?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#cancel-order">
                How Do I Cancel an Order?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/ordering#order-backorder">
                What Happens if My Item Is on Backorder?
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["faq-part"]}>
        <div className={classes["faq-part-header"]}>
          <h2>Shipping & Delivery</h2>
        </div>
        <div className={classes["faq-part-body-links"]}>
          <ul>
            <li>
              <HashLink to="/help/shippingDelivery#charge">
                What Are the Shipping Charges?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/shippingDelivery#order-line">
                When Can I Expect My Order to Be Delivered?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/shippingDelivery#counties">
                What Destinations Will You Deliver To?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/shippingDelivery#requirements">
                What Are the Delivery Requirements?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/shippingDelivery#damage-missing">
                What Happens if Items Are Missing or Damaged Upon Delivery?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/shippingDelivery#internationally">
                How Do You Handle International Shipments?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/shippingDelivery#offer-free">
                Do you offer Free Shipping?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/shippingDelivery#rules">
                What are the rules for transporting Hazardous Goods?
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["faq-part"]}>
        <div className={classes["faq-part-header"]}>
          <h2>Returns & Exchange</h2>
        </div>
        <div className={classes["faq-part-body-links"]}>
          <ul>
            <li>
              <HashLink to="/help/returnPolicy#how-return">
                How Do I Return an Item?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/returnPolicy">
                What Is Your Return Policy?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/returnPolicy#non-return">
                Are There Items That Cannot Be Returned?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/warranties">
                Are There Warranties on My Merchandise?
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["faq-part"]}>
        <div className={classes["faq-part-header"]}>
          <h2>Product information</h2>
        </div>
        <div className={classes["faq-part-body-links"]}>
          <ul>
            <li>
              <HashLink to="/help/GeneralInfo#refurbished-info">
                What Are Refurbished Items?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/GeneralInfo#imported-info">
                What Are Imported Items?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/GeneralInfo#open-box-info">
                What Are Open Box Items?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/GeneralInfo#claim-info">
                How Do I Claim a Rebate?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/GeneralInfo#trade-in-info">
                How Can I Trade in Equipment?
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["faq-part"]}>
        <div className={classes["faq-part-header"]}>
          <h2>Gift Certificates</h2>
        </div>
        <div className={classes["faq-part-body-links"]}>
          <ul>
            <li>
              <HashLink to="/help/GiftCertificates#purchase-gift">
                How Can I Purchase Gift Certificates?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/GiftCertificates#redeem-gift">
                How Can I Redeem my Gift Certificate?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/GiftCertificates#balance-gift">
                How do I check my Gift Certificate Balance?
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["faq-part"]}>
        <div className={classes["faq-part-header"]}>
          <h2>General Information</h2>
        </div>
        <div className={classes["faq-part-body-links"]}>
          <ul>
            <li>
              <HashLink to="/help/GeneralInfo#change-acc-info">
                How Can I View or Change My Account Information?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/privacy">
                What Are Your Privacy & Security Policies?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/termsAndConditions">
                What Are Your Terms & Conditions?
              </HashLink>
            </li>
            <li>
              <HashLink to="/help/termsAndConditions">
                What Happens in the Event of Typographical, Illustration, or
                Price Errors?
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

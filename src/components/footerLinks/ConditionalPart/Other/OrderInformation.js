import React from "react";
import { Link } from "react-router-dom";

import classes from "./OrderInformation.module.scss";

export default function OrderInformation() {
  return (
    <section className={classes["order-info"]}>
      <h1 id="header-order">Order Information</h1>
      <div className={classes["order-info-links"]}>
        <ul>
          <li>
            <a href="#place-order">How Do I Place an Order?</a>
          </li>
          <li>
            <a href="#payment-methods">What Payment Methods Do You Accept?</a>
          </li>
          <li>
            <a href="#verify-order">How Can I Verify an Order?</a>
          </li>
          <li>
            <a href="#sales-tax-policy">What Is Your Sales Tax Policy?</a>
          </li>
          <li>
            <a href="#check-order-status">
              How Can I Check The Status of My Order?
            </a>
          </li>
          <li>
            <a href="#track-my-order">How Can I Track My Order?</a>
          </li>
          <li>
            <a href="#cancel-order">How Do I Cancel an Order?</a>
          </li>
          <li>
            <a href="#order-backorder">
              What Happens if My Item Is on Backorder?
            </a>
          </li>
        </ul>
      </div>
      <div className={classes["order-info-orders"]} id="place-order">
        <div className={classes["order-info-orders-header"]}>
          <h2>How Do I Place an Order?</h2>
          <a href="#header-order">Return to Top</a>
        </div>
        <div className={classes["order-info-orders-body"]}>
          <div>
            <p>Online ordering is secure, fast and easy:</p>
          </div>
          <div>
            <p>
              <span>Toll Free:</span>800-223-2500
            </p>
            <p>
              <span>Local:</span>212-741-0052
            </p>
            <p>
              <span>Email: </span>
              <a href="mailto:webmaster@example.com">sales@grease.com</a>
            </p>
          </div>
          <div>
            <p>
              GSA, Federal and Local Government, and Educational customers:
              Please use the following contacts for ordering information:
            </p>
          </div>
          <div>
            <p>GSA and Federal Government</p>
          </div>
          <div>
            <p>
              <span>Toll Free:</span>888-209-5558
            </p>
            <p>
              <span>Local:</span>212-741-1027
            </p>
            <p>
              <span>Email</span>
              <a href="mailto:webmaster@example.com">gsa@grease.com</a>
            </p>
          </div>
          <div>
            <p>Education, State and Local Government</p>
          </div>
          <div>
            <p>
              <span>Toll Free:</span>888-582-2500
            </p>
            <p>
              <span>Local:</span>212-741-9087
            </p>
            <p>
              <span>Email:</span>
              <a href="mailto:webmaster@example.com">govsales@grease.com</a>
            </p>
          </div>
          <div>
            <p>Bids: Education and Local Government</p>
          </div>
          <div>
            <p>
              <span>Toll Free:</span>888-582-2500
            </p>
            <p>
              <span>Local:</span>646-758-8558
            </p>
            <p>
              <span>Email:</span>
              <a href="mailto:webmaster@example.com">biddept@grease.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["order-info-orders"]} id="payment-methods">
        <div className={classes["order-info-orders-header"]}>
          <h2>What Payment Methods Do You Accept?</h2>
          <a href="#header-order">Return to Top</a>
        </div>
        <div className={classes["order-info-orders-body"]}>
          <div>
            <p>
              <span>Credit Cards</span>
            </p>
            <p>
              Grease accepts VISA, MasterCard, American Express, Visa, Discover
              and PayPal. Your credit card is charged only at the time of the
              actual shipment of item(s). However, there might be a temporary
              hold on the funds until the time of actual shipment. If paying by
              Debit or Check Card, the funds are authorized as soon as the order
              is placed, which may affect the availability of funds in the
              account.
            </p>
          </div>
          <div>
            <p>
              Please provide the correct billing information for the card being
              used. Billing information includes name, address and phone number
              of the card owner as recorded by the bank or card issuer. If using
              a shipping address that is different then the billing address,
              please provide a phone number for the shipping address.
            </p>
          </div>
          <div>
            <p>
              <span>Checks / COD</span>
            </p>
            <p>We do not accept Checks or COD orders, sorry.</p>
          </div>
        </div>
      </div>
      <div className={classes["order-info-orders"]} id="verify-order">
        <div className={classes["order-info-orders-header"]}>
          <h2>How Can I Verify an Order?</h2>
          <a href="#header-order">Return to Top</a>
        </div>
        <div className={classes["order-info-orders-body"]}>
          <div>
            <p>
              Some orders might be subject to our verification procedure before
              we can process it. For your protection from credit card fraud or
              identity theft, we may ask you to verify that you're the card
              owner or that the order and the ship-to information are valid. If
              your order requires verification, you will be notified by email
              within one business day.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["order-info-orders"]} id="sales-tax-policy">
        <div className={classes["order-info-orders-header"]}>
          <h2>What Is Your Sales Tax Policy?</h2>
          <a href="#header-order">Return to Top</a>
        </div>
        <div className={classes["order-info-orders-body"]}>
          <div>
            <p>
              Orders shipping to an address in a state which requires us to
              collect sales tax will have local sales tax assessed. In certain
              cases, we may provide an estimated sales tax amount until your
              exact location is finalized prior to order completion.
            </p>
          </div>
          <div>
            <p>
              International orders are subject to tax, duty and import fees. See{" "}
              <Link to="/help/internationalOrders">International Orders.</Link>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["order-info-orders"]} id="check-order-status">
        <div className={classes["order-info-orders-header"]}>
          <h2>How Can I Check the Status of My Order?</h2>
          <a href="#header-order">Return to Top</a>
        </div>
        <div className={classes["order-info-orders-body"]}>
          <div>
            <p>
              Simply log in to your account and check the progress of your order
              while it's being processed.
            </p>
          </div>
          <div>
            <p>
              <span>Pending </span>- order has been submitted and is being
              imported to our database
            </p>
          </div>
          <div>
            <p>
              <span>On Hold </span>- order is being verified or has payment
              issues
            </p>
          </div>
          <div>
            <p>
              <span>Ready </span>- order is ready to be processed
            </p>
          </div>
          <div>
            <p>
              <span>Picked </span>- order is currently being picked in the
              shipping department
            </p>
          </div>
          <div>
            <p>
              <span>Invoiced </span>- order has been finalized and ready to be
              packed
            </p>
          </div>
          <div>
            <p>
              <span>Shipped </span>- order has been shipped and is in transit
            </p>
          </div>
          <div>
            <p>
              <span>Backorder </span>- one or more of the items in your order
              are out of stock; we are waiting for the item(s) to become
              available
            </p>
          </div>
          <div>
            <p>
              <span>Canceled </span>- the order is canceled.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["order-info-orders"]} id="track-my-order">
        <div className={classes["order-info-orders-header"]}>
          <h2>How Can I Track My Order?</h2>
          <a href="#header-order">Return to Top</a>
        </div>
        <div className={classes["order-info-orders-body"]}>
          <div>
            <p>
              We email you a tracking number as soon as it's available (Note: it
              may take up to 24 hours to be updated online). You can track your
              order by logging in to your account and clicking the{" "}
              <Link to="/help/trackOrder">"Track Orders"</Link> link.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["order-info-orders"]} id="cancel-order">
        <div className={classes["order-info-orders-header"]}>
          <h2>How Do I Cancel an Order?</h2>
          <a href="#header-order">Return to Top</a>
        </div>
        <div className={classes["order-info-orders-body"]}>
          <div>
            <p>
              You can cancel your order provided it hasn't yet entered the
              shipping process by calling our customer service dept at
              800-815-0702 or contact us by filling out our online{" "}
              <Link to="/help/contactUs">Contact form</Link>. If the item has
              entered the shipping process, it cannot be canceled. However, you
              can return the item for a refund. See{" "}
              <Link to="/help/returnPolicy">Return policy</Link>. Note: TV's or
              any other item shipped by truck can only be canceled prior to
              shipment. Once shipped and in route, the order cannot be canceled.
              If the delivery is refused, the shipping and handling charges for
              both ways will be deducted from the credit, and at our discretion
              a restocking fee might also be deducted.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["order-info-orders"]} id="order-backorder">
        <div className={classes["order-info-orders-header"]}>
          <h2>What Happens if My Item Is on Backorder?</h2>
          <a href="#header-order">Return to Top</a>
        </div>
        <div className={classes["order-info-orders-body"]}>
          <div>
            <p>
              We strive to keep most items in stock for immediate delivery
              (unless we specify that it is available on Special Order basis
              only).
            </p>
          </div>
          <div>
            <p>
              In the event that an item is out of stock or for any other reason
              it's unable to be shipped, we will notify you usually within one
              business day. We will keep the order open unless told to cancel
              it. When the item is in stock, we will ship it out to you. Your
              credit card will only be charged at the actual time of shipment,
              there might be a hold on the funds until the time of shipment.
            </p>
          </div>
          <div>
            <p>
              Due to high international shipping costs and taxes and duty fees,
              we cannot ship any international order that includes backordered
              items. We will hold the order until all items are in stock and
              available to ship. Contact us if you wish to cancel or change
              these items.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

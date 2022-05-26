import React from "react";
import { Link } from "react-router-dom";

import classes from "./PaymentMethods.module.scss";

export default function PaymentMethods() {
  return (
    <section className={classes["payment-methods"]}>
      <h1>Payment Methods</h1>
      <div className={classes["payment-methods-method"]}>
        <div className={classes["payment-methods-method-header"]}>
          <h2>Credit Cards</h2>
        </div>
        <div className={classes["payment-methods-method-body"]}>
          <div>
            <p>
              Grease accepts VISA, MasterCard, American Express, Visa Checkout
              and Discover. Your credit card is charged only at the time of the
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
              a shipping address that is different than the billing address,
              please provide a phone number for the shipping address.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["payment-methods-method"]}>
        <div className={classes["payment-methods-method-header"]}>
          <h2>Grease Credit Card Account</h2>
        </div>
        <div className={classes["payment-methods-method-body"]}>
          <div>
            <p>
              Grease Edge Credit Card is a payment option that offers consumer
              opportunities to gear up, with convenient financing options, and
              everyday rewards. The card pairs offers like special financing on
              qualifying purchases* or an instant 5% off† every day benefit with
              no annual fee** to give customers a choice between two great
              options when they shop at Grease.{" "}
              <Link to="/nspc/edgeCredit">Learn More.</Link>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["payment-methods-method"]}>
        <div className={classes["payment-methods-method-header"]}>
          <h2>Visa Checkout</h2>
        </div>
        <div className={classes["payment-methods-method-body"]}>
          <div>
            <p>
              To ensure our customers feel safe when shopping with Grease, we
              accept the Visa Checkout payment option. Visa Checkout saves time
              and effort. No need to re-enter your card number or shipping
              preferences again. Visa Checkout allows you to pay with
              confidence. Visa Checkout combines secure technology and valuable
              features with reliable customer service. Visa Checkout lets you
              use any major credit or debit card through a single service. It's
              your choice.{" "}
              <a href="https://www.v.me" target="_blank" rel="noreferrer">
                Learn More.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["payment-methods-method"]}>
        <div className={classes["payment-methods-method-header"]}>
          <h2>PayPal</h2>
        </div>
        <div className={classes["payment-methods-method-body"]}>
          <div>
            <p>
              PayPal Credit is a payment option that lets you buy now and pay
              over time. Apply and get a decision in seconds. Take advantage of
              6 months special financing on purchases of $99 or more.{" "}
              <a
                href="https://www.paypal.com/us/digital-wallet/how-paypal-works"
                target="_blank"
                rel="noreferrer"
              >
                Learn More.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["payment-methods-method"]}>
        <div className={classes["payment-methods-method-header"]}>
          <h2>PayPal Credit</h2>
        </div>
        <div className={classes["payment-methods-method-body"]}>
          <div>
            <p>
              PayPal Credit is a payment option that lets you buy now and pay
              over time. Apply and get a decision in seconds. Take advantage of
              6 months special financing on purchases of $99 or more.{" "}
              <a
                href="https://www.paypal.com/us/webapps/mpp/paypal-credit-signin"
                target="_blank"
                rel="noreferrer"
              >
                Learn More.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["payment-methods-method"]}>
        <div className={classes["payment-methods-method-header"]}>
          <h2>Wire Transfers</h2>
        </div>
        <div className={classes["payment-methods-method-body"]}>
          <div>
            <p>
              To use wire transfer as a form of payment, please place your order
              over the phone with a salesman at 800-223-2500. They will generate
              an order or quote for you and email you an order/quote copy. You
              can then proceed with the wire transfer on your end. There is a
              $20 wire transfer charge. Our payment information is:
            </p>
          </div>
          <div>
            <p>Citibank, N.A.</p>
            <p>153 East 53rd Street</p>
            <p>New York, NY 10043</p>
            <p>ADORAMA INC.</p>
            <p>Account#: 4979165791</p>
            <p>ABA Number: 021000089</p>
          </div>
          <div>
            <p>For International wires: CITIUS33</p>
          </div>
          <div>
            <p>Please include your order or quote number.</p>
          </div>
          <div>
            <p>
              Once you have wired the funds, please email us back letting us
              know it has been done. Please allow 5-10 business days for the
              transfer to be completed. We will email a confirmation once the
              funds have reached us and we have successfully processed your
              order.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["payment-methods-method"]}>
        <div className={classes["payment-methods-method-header"]}>
          <h2>Checks / COD</h2>
        </div>
        <div className={classes["payment-methods-method-body"]}>
          <div>
            <p>We do not accept Checks or COD orders, sorry.</p>
          </div>
        </div>
      </div>
      <div className={classes["payment-methods-method"]}>
        <div className={classes["payment-methods-method-header"]}>
          <h2>Purchase Orders</h2>
        </div>
        <div className={classes["payment-methods-method-body"]}>
          <div>
            <p>
              Grease accepts purchase orders, "P" credit cards as well as other
              payments listed above from corporate, GSA, Federal & Local
              Government, and Educational customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

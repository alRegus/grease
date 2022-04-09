import React, { useState } from "react";

import classes from "./HearFromYou.module.scss";

export default function HearFromYou() {
  const [hover, setHover] = useState({ visibility: "hidden", opacity: "0" });

  return (
    <section className={classes["help-hear"]}>
      <h2>We`d Love to Hear From You</h2>
      <div
        className={classes["help-hear-phone"]}
        onMouseEnter={() => {
          setHover({ visibility: "visible", opacity: "1" });
        }}
        onMouseLeave={() => {
          setHover({ visibility: "hidden", opacity: "0" });
        }}
      >
        <i className="fa-solid fa-phone"></i>
        <a href="tel:+8002232500">800-223-2500</a>
        <i className="fa-solid fa-square-question">?</i>
        <div style={hover} className={classes["help-hear-phone-hover"]}>
          <h2>CUSTOMER SERVICE HOURS:</h2>
          <ul>
            <li>Mon. - Thurs. 9:30am to 7:00pm</li>
            <li>Fri. 9:30am to 4:00pm</li>
            <li>Eastern time</li>
            <li>800-815-0702</li>
            <li>212-741-0466</li>
          </ul>
        </div>
      </div>
      <div className={classes["help-hear-address"]}>
        <h2>Visit Our NYC Store</h2>
        <ul>
          <li>42 West 18th St.</li>
          <li>New York, NY 10011</li>
          <li>N212-741-0063</li>
          <li>
            <a href="#">Maps & Directions</a>
          </li>
        </ul>
      </div>
      <div className={classes["help-hear-departments"]}>
        <a href="#">All Departments & Services</a>
      </div>
      <div className={classes["help-hear-payments"]}>
        <h2>We Accept</h2>
        <ul>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/adorama_credit.png"
              alt="Adorama Edge Credit Card"
            />
            <span>Adorama Edge Credit Card</span>
          </li>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/americane.png"
              alt="American Express"
            />
            <span>American Express</span>
          </li>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/applepay.png"
              alt="Apple Pay"
            />
            <span>Apple Pay</span>
          </li>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/discover.png"
              alt="Discover"
            />
            <span>Discover</span>
          </li>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/googlepay.png"
              alt="Google Pay"
            />
            <span>Google Pay</span>
          </li>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/mastercard.png"
              alt="Mastercard"
            />
            <span>Mastercard</span>
          </li>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/paypal.png"
              alt="PayPal"
            />
            <span>PayPal</span>
          </li>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/paypal_credit.png"
              alt="PayPal Credit"
            />
            <span>PayPal Credit</span>
          </li>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/venmo.png"
              alt="Venmo"
            />
            <span>Venmo</span>
          </li>
          <li>
            <img
              src="https://www.adorama.com/col/payment_methods/visa.png"
              alt="Visa"
            />
            <span>Visa</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

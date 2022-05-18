import React from "react";
import { Link } from "react-router-dom";

import classes from "./GiftCertificates.module.scss";

export default function GiftCertificates() {
  return (
    <section className={classes["gift-certificates"]}>
      <h1 id="header-gift">Gift Certificates</h1>
      <div className={classes["gift-certificates-gift"]}>
        <div className={classes["gift-certificates-gift-header"]}>
          <h2>How Can I Purchase Gift Certificates?</h2>
          <a href="#header-gift">Return to Top</a>
        </div>
        <div className={classes["gift-certificates-gift-body"]}>
          <div>
            <p>
              Grease gift cards and gift certificates are a smart way for
              friends and family to choose the photographic or electronic gift
              that's right for them, while staying within your budget.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["gift-certificates-gift"]}>
        <div className={classes["gift-certificates-gift-header"]}>
          <h2>How Can I Redeem my Gift Certificate?</h2>
          <a href="#header-gift">Return to Top</a>
        </div>
        <div className={classes["gift-certificates-gift-body"]}>
          <div>
            <p>
              <span>
                To redeem your gift certificate on the phone or in store
              </span>{" "}
              When you place your order tell the salesperson that you want to
              pay with your gift certificate.
            </p>
          </div>
          <div>
            <p>
              <span>To redeem your gift certificate online</span> When you check
              out you'll be given the option to use your gift certificate as a
              payment method. Remember, you can redeem as much or as little of
              the gift certificate as you want with each order; the remaining
              balance will be stored in your account for future orders.
            </p>
          </div>
          <div>
            <p>
              <span>Terms and Conditions of Gift Certificates</span>
            </p>
          </div>
          <div>
            <ul>
              <li>Gift certificates do not have an expiration date.</li>
              <li>
                The balance due on an order that exceeds the gift certificate
                amount must be paid by credit card.
              </li>
              <li>
                Any unused balance will be placed in the recipient's gift
                certificate account and is not transferable.
              </li>
              <li>Gift certificates are non-transferable.</li>
              <li>
                Gift certificates may not be purchased or redeemed for
                international orders.
              </li>
              <li>
                Gift certificates cannot be used to purchase gift certificates
                or gift cards.
              </li>
              <li>
                Gift certificates are not redeemable for cash and cannot be
                returned for a refund.
              </li>
              <li>Gift certificate cash value is 1/10 of one cent.</li>
              <li>
                We are not responsible for lost or stolen gift certificates.
              </li>
              <li>
                When redeeming a Gift certificates in our store a proper ID with
                a valid US Address will be required.
              </li>
              <li>
                Adorama will have the right to close customer accounts and
                request alternative forms of payment if a fraudulently obtained
                gift certificate is either redeemed through the adorama.com Web
                site or in our store.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes["gift-certificates-gift"]}>
        <div className={classes["gift-certificates-gift-header"]}>
          <h2>How do I check my Gift Certificate Balance?</h2>
          <a href="#header-gift">Return to Top</a>
        </div>
        <div className={classes["gift-certificates-gift-body"]}>
          <div>
            <p>
              You can check your Gift Card balance by visiting{" "}
              <Link to="/login">Your Account</Link> or by calling{" "}
              <span>1-800-223-2500.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

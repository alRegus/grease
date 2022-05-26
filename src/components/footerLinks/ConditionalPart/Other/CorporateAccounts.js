import React from "react";

import classes from "./CorporateAccounts.module.scss";

export default function CorporateAccounts() {
  return (
    <section className={classes["corporate-accounts"]}>
      <h1>Professional Services and Corporate Accounts</h1>
      <div className={classes["corporate-accounts-acc"]}>
        <div className={classes["corporate-accounts-acc-header"]}>
          <h2>Pro Services</h2>
        </div>
        <div className={classes["corporate-accounts-acc-body"]}>
          <div>
            <div>
              <p>
                Servicing professional photographers, filmmakers, production
                studios, broadcast facilities, post houses, digital cinema
                studios, publishing companies, and more. For Competitive pricing
                for quotes and bids, please email{" "}
                <a href="mailto:webmaster@example.com">
                  proservice@grease.com.
                </a>
              </p>
            </div>
            <div>
              <p>
                We can also recommend several leasing companies with a $1 buyout
                at the end of the contract. For local professional
                photographers, we offer in-store pick-up and same day messenger
                delivery.
              </p>
            </div>
            <div>
              <p>
                To apply for an open account please email{" "}
                <a href="mailto:webmaster@example.com">proservice@grease.com</a>{" "}
                for an application. Annual purchases must start at $10,000 to be
                eligible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["corporate-accounts-acc"]}>
        <div className={classes["corporate-accounts-acc-header"]}>
          <h2>Corporate Division</h2>
        </div>
        <div className={classes["corporate-accounts-acc-body"]}>
          {" "}
          <div>
            <p>
              If you are a medium to large, regionally based or national
              organization with multiple locations, and spend more than $10,000
              per year on supplies, your company may qualify for an open net
              terms corporate account. Please email{" "}
              <a href="mailto:webmaster@example.com">rayg@grease.com</a> for the
              open account application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

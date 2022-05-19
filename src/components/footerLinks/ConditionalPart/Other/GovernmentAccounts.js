import React from "react";
import { Link } from "react-router-dom";

import classes from "./GovernmentAccounts.module.scss";

export default function GovernmentAccounts() {
  return (
    <section className={classes["government-accounts"]}>
      <h1>Greases commitment to Government and Education</h1>
      <Link to="/help/DepartmentsAndServices">Contact Us</Link>
      <div className={classes["government-accounts-acc"]}>
        <div className={classes["government-accounts-acc-header"]}>
          <h2>Pro Services</h2>
        </div>
        <div className={classes["government-accounts-acc-body"]}>
          <div>
            <p>
              The Adorama brand is synonymous with best value, knowledgeable
              staff and the belief that technology is serious business. With
              Adorama for Government & Education, Value Added Reseller (VAR) of
              brand name and private label products, we make it easy for our
              clients and customers to obtain the goods and services they
              require. From electronics and related accessories, to cutting edge
              technology and supplies, our marketing and distribution features
              e-commerce websites, catalogs, retail stores and direct sales
              representatives. This combined with over 33 years of experience
              and the can do attitude Adorama is known for, Adorama is poised to
              capture a large share of a lucrative and underserved market
            </p>
          </div>
          <div className={classes["government-accounts-acc-body-paypal"]}>
            <p>
              <i className="fa-brands fa-paypal"></i>DUNS# 087403499
            </p>
            <p>
              <i className="fa-brands fa-paypal"></i>CAGE CODE 79702
            </p>
            <p>
              <i className="fa-brands fa-paypal"></i>TIN# 13-2918676
            </p>
          </div>
          <div className={classes["government-accounts-acc-body-paypal"]}>
            <h2>GSA Contract Holder</h2>
            <p>
              <i className="fa-brands fa-paypal"></i>Schedule 67 - GS-02F-0016S
            </p>
            <p>
              <i className="fa-brands fa-paypal"></i>Schedule 70 - GS-35F-0483X
            </p>
            <p>
              <i className="fa-brands fa-paypal"></i>Schedule 84 - GS-07F-105BA
            </p>
            <p>
              <i className="fa-brands fa-paypal"></i>NIH BPA -
              HHSN2623201200075B
            </p>
          </div>
          <div className={classes["government-accounts-acc-body-paypal"]}>
            <h2>Partner Schedule</h2>
            <p>
              <i className="fa-brands fa-paypal"></i>Partnered Schedule -
              GS-35F-0485R
            </p>
            <p>
              <i className="fa-brands fa-paypal"></i>Partnered Schedule -
              GS-35F-0119Y
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

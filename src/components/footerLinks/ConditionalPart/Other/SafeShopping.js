import React from "react";
import { Link } from "react-router-dom";

import classes from "./SafeShopping.module.scss";

export default function SafeShopping() {
  return (
    <section className={classes["safe-shopping"]}>
      <h1>Safe Shopping</h1>
      <div className={classes["safe-shopping-body"]}>
        <div>
          <p>
            Grease.com takes great pride in offering a safe and secure online
            shopping experience.
          </p>
        </div>
        <div>
          <p>
            We understand that the safety of your personal information is
            extremely important to you. We use a wide array of electronic and
            physical security measures and devices to protect your personal data
            and credit card information from unauthorized access.
          </p>
        </div>
        <div>
          <p>
            <Link to="/help/privacy">
              Learn How We Protect Your Personal Data
            </Link>
          </p>
        </div>
        <div></div>
        <div>
          <p>
            <span className={classes["safe-shopping-body-span"]}>
              Security Policy
            </span>
          </p>
        </div>
        <div>
          <p>
            Grease.com uses Secure Sockets Layer (SSL) technology to provide you
            with the safest, most secure shopping experience possible. SSL
            technology enables encryption (scrambling) of sensitive information
            during your online transactions. All of the forms on our site are
            secured with SSL technology so your personal information stays safe
            and out of malicious hands.
          </p>
        </div>
        <div>
          <p>
            <span>VeriSign</span>
          </p>
          <p>
            VeriSign, Inc. is a technology company that specializes in data
            encryption and e-commerce. It is one of the most recognized
            companies for certifying that a website is secure and encrypted.
            With VeriSign, you can feel confident shopping on our website!
          </p>
        </div>
        <div>
          <p>
            <span>McAfee Secure - Information Security & Compliance</span>
          </p>
          <p>
            The McAfee SECURE™ trustmark only appears when the website has
            passed our intensive, daily security scan. We test for possible
            personal information access, links to dangerous sites, phishing, and
            other online dangers.
          </p>
        </div>
        <div>
          <p>
            <span>Industry Standard Firewalls</span>
          </p>
          <p>
            Grease.com servers are protected by secure firewalls communication
            management computers specially designed to keep information secure
            and inaccessible by other Internet users. So you're absolutely safe
            while you shop.
          </p>
        </div>
        <div>
          <p>
            SSL Technology, Trustwave, and Industry Standard Firewalls all work
            together to ensure your privacy and to assist in protecting your
            personal data.
          </p>
        </div>
        <div>
          <p>
            <span>Privacy Policy</span>
          </p>
          <p>
            Grease.com doesn't rent, sell or share your personal information
            with anyone. Our Privacy Policy details how your personal
            information is collected and how your personal information may be
            used.
          </p>
        </div>
        <div>
          <p>
            <Link to="/help/privacy">
              Learn How We Protect Your Personal Data
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

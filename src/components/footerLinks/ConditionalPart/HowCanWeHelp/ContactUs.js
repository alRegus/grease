import React from "react";

import classes from "./ContactUs.module.scss";

export default function ContactUs() {
  return (
    <section className={classes["contact-us"]}>
      <h1>Contact Us</h1>
      <div className={classes["contact-us-phone"]}>
        <h2>
          For <span>Sales Assistance</span>, call{" "}
          <a href="tel:800-223-2500">800-223-2500</a>
        </h2>
        <div className={classes["contact-us-phone-hours"]}>
          <div>
            <p>Monday–Thursday:</p>
            <p>Friday:</p>
            <p>Saturday:</p>
            <p>Sunday:</p>
          </div>
          <div>
            <p>9am–11pm EST</p>
            <p>9am–6pm EST</p>
            <p>Closed</p>
            <p>9:30am–5pm EST</p>
          </div>
        </div>
      </div>
      <div className={classes["contact-us-phone"]}>
        <h2>
          For <span>Customer Service</span>, call{" "}
          <a href="tel:800-815-0702">800-815-0702</a>
        </h2>
        <div className={classes["contact-us-phone-hours"]}>
          <div>
            <p>Monday–Thursday:</p>
            <p>Friday:</p>
            <p>Saturday:</p>
            <p>Sunday:</p>
          </div>
          <div>
            <p>9am–7pm EST</p>
            <p>9am–4pm EST</p>
            <p>Closed</p>
            <p>10am–5pm EST</p>
          </div>
        </div>
      </div>
      <div className={classes["contact-us-input"]}>
        <h2>
          <span>Questions?</span> Send Us a Note:
        </h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="order-number">
              Order Number (for existing orders)
            </label>
            <input type="text" id="order-number" required />
          </div>
          <div className={classes["contact-us-input-select"]}>
            <label htmlFor="department">Choose Department</label>
            <select name="department" id="department">
              <option value="select">--select--</option>
              <option value="customer-service">
                Customer Services on Existing orders
              </option>
              <option value="product-info">Product Information</option>
              <option value="help-site">Help with our site</option>
            </select>
          </div>
          <div>
            <label htmlFor="comment">Your Comments</label>
            <textarea
              name="comments"
              id="comment"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </section>
  );
}

import React from "react";

export default function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div>
        <h3>
          <span>For</span> Sales Assistance, call{" "}
          <a href="tel:">800-223-2500</a>
        </h3>
        <div>
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
      <div>
        <h3>
          <span>For</span> Customer Service, call{" "}
          <a href="tel:">800-815-0702</a>
        </h3>
        <div>
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
      <div>
        <h3>
          <span>Questions?</span> Send Us a Note:
        </h3>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="order-number">
              Order Number (for existing orders)
            </label>
            <input type="number" id="order-number" />
          </div>
          <div>
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
            ></textarea>
          </div>
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </div>
  );
}

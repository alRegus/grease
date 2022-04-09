import React from "react";

import classes from "./ReturnPolicy.module.scss";

export default function ReturnPolicy() {
  return (
    <section className={classes["return-policy"]}>
      <div>
        <h1>Return Policy</h1>
        <p>
          We believe that in order to have the best possible online shopping
          experience, our customers should be 100% satisfied with their
          purchase. So, if you're not happy with your purchase for any reason,
          just go through our easy self-service return process.
        </p>
        <p>
          All returns must meet our guidelines, please review our full Return
          Policy carefully.
        </p>
      </div>
      <div className={classes["return-policy-how"]}>
        <h2>How To Return</h2>
        <img src="https://i.ibb.co/6wmqZVQ/pps-return.jpg" alt="pack" />
        <h3>Registered Users</h3>
        <p>
          Simply go to <a href="">your orders page</a> and start a self-return
          process
        </p>
        <img src="https://i.ibb.co/R0s8dRm/selfreturn.jpg" alt="selfreturn" />
        <h3>Non–Registered Users</h3>
        <ul>
          <li>
            <a href="">Create an account</a> - (use the same email associated
            with the order)
          </li>
          <li>Start the self-return process</li>
        </ul>
        <p>
          For a manual return, fill out <a href="">RM Form</a> and enclose it
          with your package and return to:
        </p>
        <div className={classes["return-policy-how-address"]}>
          <p>Order Processing</p>
          <p>7 Slater Drive</p>
          <p>Elizabeth, NJ 07206</p>
        </div>
        <b>
          International returns, please mark the item as "VENDOR RETURN" to
          avoid duties and customs.
        </b>
        <h3>Refund Policy</h3>
        <p>
          Please allow 3-5 business days from when we receive your return to
          process your refund. You will be notified by email once your return is
          processed. Adorama reserves the right to refuse return, refund and/or
          charge a restocking fee for any product that doesn’t comply with the
          above mentioned requirements.
        </p>
      </div>
      <div>
        <h2>30 Day Return Policy.</h2>
        <p>
          For the first 30 days after your purchase you may return merchandise
          for a full money back refund, excluding any shipping charges.
        </p>
        <p>
          Returned or exchanged products must be in brand new, mint condition,
          and have all original manufacturer's packaging, materials, and
          accessories, including instruction booklets, packing inserts, and
          blank warranty cards.
        </p>
        <p>Please remove all unnecessary pre-existing labels from the box.</p>
        <p>
          Merchandise missing the original Universal Product Code (UPC) cannot
          be returned. The original manufacturer's labeled packaging should be
          enclosed within an outer shipping box. Please do not write or place
          shipping labels or stickers on the manufacturer's packaging.
        </p>
        <p>
          If a product is received defective or incorrect, please please submit
          an <a href="">online return request</a> or <a href="">contact us</a>{" "}
          immediately and we will do whatever possible to resolve the issue. We
          will only cover return shipping if we are notified prior to return.
        </p>
      </div>
      <div>
        <h2>Non returnable items</h2>
        <p>Following items cannot be returned once opened</p>
        <p>
          Software, Film, Paper, DVDs, Bulbs, flash tubes, Batteries, Ink
          cartridges, Notebooks, Netbooks, Tablets, iPads and Computers, Memory
          cards, any item which has been removed from its "blister-pack".
        </p>
        <p>Printers cannot be returned once toner has been installed.</p>
        <p>
          Underwater equipment cannot be returned once it has been used in water
        </p>
        <h3>Oversize Return Policy</h3>
        <p>
          Oversize items that are required to ship via truck, are returnable
          pending they meet our standard return requirements. Return shipping
          cost is the responsibility of the customer. Once shipped, if a package
          is refused, the return ship fees will be deducted from the refund
          total.
        </p>
        <p>
          If an oversize item shipped directly from the manufacturer, it will
          need to be returned to their location. Please{" "}
          <a href="">contact us</a> prior to return and we will assist getting
          the return set up.
        </p>
      </div>
    </section>
  );
}

import React from "react";

import Accordion from "./Accordion";
import classes from "./EdgeCreditCard.module.scss";

const accContent = [
  {
    title: "Where can I use my Adorama Edge Credit Card?",
    content: `<p>
Your Adorama Edge Credit Card can be used to make purchases online,
at <a href="">adorama.com</a>.
</p>`,
  },
  {
    title: "What are the current special financing offers?",
    content: ` <ul>
    <li>6 Month Special Financing* on orders totaling $199-$799.99</li>
    <li>
      12 Month Special Financing* available on orders totaling $800 or
      more
    </li>
  </ul>
  <p>
    Order minimum excludes sales tax, shipping fees, and discounts. To
    receive special financing, simply pay with the Adorama Edge Credit
    Card and select the financing option during checkout.
  </p>`,
  },
  {
    title: "How do I use the 5% OFF† Every Day benefits?",
    content: `<p>
    Enjoy 5% Off Every Day benefit on orders charged to your Adorama
    Edge Credit Card by selecting the option at checkout. You will be
    prompted to select either special financing (if purchase amount
    qualifies) or the 5% Off every day benefit when you enter your
    Adorama Edge Credit Card information for every purchase.
  </p>
  <p>
    If you use an Adorama Edge Credit Card in the same purchase with
    another form of payment, the 5% OFF discount benefit will apply only
    to the purchase amount on the Adorama Edge Credit Card.
  </p>
  <p>
    5% Off Every Day benefit does not apply to purchases of Gift Cards,
    and on any prior purchases. Excludes taxes and shipping charges.
  </p>`,
  },
  {
    title: "How will I receive my Adorama Edge Credit Card Information?",
    content: `<p>
    Applying for an Adorama Edge Credit Card is fast and easy. The
    application is subject to approval by Synchrony Bank. If approved,
    we’ll automatically add your Adorama Edge Credit Card to your
    account at checkout. Select the Adorama Edge Credit Card under the
    payment information to pull up your available balance and select
    between Special Financing (if purchase amount qualifies) or the 5%
    OFF every day benefit.
  </p>
  <p>
    You will receive a letter in the mail within 7-10 business days
    after applying.
  </p>`,
  },
  {
    title: `How can I manage my account?`,
    content: `<p>
    For Adorama Edge Credit Card accounts, you can pay your bill online
    or modify your account settings by clicking <a href="">here</a>.
  </p>
  <p>
    <span>Pay By Phone:</span>Contact Synchrony Customer Service during
    business hours at (866) 396-8254.
  </p>
  <p>Monday - Friday 7:30 AM - 12:00AM ET</p>
  <p>Saturday 10:00 AM - 7:00PM ET</p>
  <p>Sunday Closed</p>
  <p>
    <span>Pay By Mail:</span>To ensure your payment is on time, mail in
    advance of the payment due date. Send payment to:
  </p>
  <p>Synchrony Bank</p>
  <p>P.O. Box 960061</p>
  <p>Orlando, FL 32896-0061</p>
  <strong>Adorama Financing</strong>
  <p>
    For Genesis Credit Accounts, issued by First Electronic Bank, Member
    FDIC, click <a href="">here</a> to manage your account or for more
    information.
  </p>
  <p>
    <span>Pay By Phone:</span> Contact Genesis Customer Service during
    business hours at 1-(866)-502-6439.
  </p>
  <p>Monday - Sunday 9:00 AM - 9:00PM ET</p>`,
  },
  {
    title: `Can I use the Adorama Edge Credit Card for purchases on the Business
  Solutions Portal, or as a verified Creators GearUp member
  participating in the college student discount program?`,
    content: `<p>
  Currently, you will not be able to use the Adorama Edge Credit Card
  for purchases on the Business Solutions Portal, or as a verified
  Creators GearUp member.
</p>`,
  },
];

export default function EdgeCreditCard() {
  return (
    <section className={classes["edge-credit-card"]}>
      <div className={classes["edge-credit-card-heading"]}>
        <div className={classes["edge-credit-card-grid"]}>
          <h1>Adorama Edge Credit Card</h1>
          <span>
            Where payment flexibility and everyday rewards work to your
            advantage.
          </span>

          <button>Apply Now</button>
          <span>or</span>
          <button>Pre-Qualify</button>
          <span>
            See if you pre-qualify with no impact to your credit bureau score.
          </span>
        </div>
      </div>
      <div className={classes["edge-credit-card-gearup"]}>
        <h2>
          GEAR UP AND CHOOSE BETWEEN TWO GREAT BENEFITS EVERY TIME YOU SHOP WITH
          US.
        </h2>
        <div className={classes["edge-credit-card-gearup-cards"]}>
          <div className={classes["edge-credit-card-gearup-cards-card"]}>
            <i className="fa-solid fa-credit-card"></i>
            <h3>Special Financing</h3>
            <p>Convenient monthly payments on purchases of $199+</p>
          </div>
          <p className={classes["edge-credit-card-gearup-cards-or"]}>OR</p>
          <div className={classes["edge-credit-card-gearup-cards-card"]}>
            <i className="fa-solid fa-gift"></i>
            <h3>5% OFF† Every Day</h3>
            <p>
              Enjoy 5% OFF† purchases every day with the Adorama Edge Credit
              Card!
            </p>
          </div>
        </div>
        <div className={classes["edge-credit-card-gearup-benefits"]}>
          <div className={classes["edge-credit-card-gearup-benefits-part"]}>
            <i className="fa-solid fa-money-bill-1"></i>
            <p>No Annual Fee**</p>
          </div>
          <div className={classes["edge-credit-card-gearup-benefits-part"]}>
            <i className="fa-solid fa-calendar-days"></i>
            <p>Convenient Payments</p>
          </div>
          <div className={classes["edge-credit-card-gearup-benefits-part"]}>
            <i className="fa-solid fa-stopwatch"></i>
            <p>Instant Credit Decision</p>
          </div>
        </div>
        <div className={classes["edge-credit-card-gearup-apply"]}>
          <div>
            <p>
              See if you pre-qualify with no impact to your credit bureau score.
            </p>
          </div>
          <div className={classes["edge-credit-card-gearup-apply-buttons"]}>
            <a href="">Apply Now</a>
            <p>or</p>
            <a href="">Pre-Qualify</a>
          </div>
        </div>
      </div>
      <div className={classes["edge-credit-card-benefits"]}>
        <div className={classes["edge-credit-card-benefits-img"]}>
          <img
            src="https://i.ibb.co/3sLTMPh/Ado-GLP-Card-Slant-Midpage.png"
            alt=""
          />
        </div>
        <div className={classes["edge-credit-card-benefits-content"]}>
          <div className={classes["edge-credit-card-benefits-content-part"]}>
            <h2>Special Financing Benefits</h2>
            <span>No Interest if Paid in Full Within 6 or 12 Months*</span>
            <strong>
              6 Months Special Financing available on purchases of $199-$799.99.
              12 Months Special Financing available on purchases of $800 or
              more.
            </strong>
            <p>
              Only valid on purchases made with the Adorama Edge Credit Card.
              Interest will be charged to your account from the purchase date if
              the promotional balance is not paid in full within 6 or 12 Months.
              Minimum monthly payments required.
            </p>
          </div>
          <p className={classes["edge-credit-card-benefits-content-or"]}>OR</p>
          <div className={classes["edge-credit-card-benefits-content-part"]}>
            <h2>Every Day Savings</h2>
            <span>5% OFF† Every Day with your Adorama Edge Credit Card</span>
            <strong>
              Use your Adorama Edge Credit Card, enjoy 5% off every day on your
              purchase.
            </strong>
            <p>
              Special Financing and 5% OFF Adorama Edge Credit Card benefit
              can’t be combined. You will be asked to select Special Financing
              (if purchase amount qualifies) or 5% OFF every day benefit at
              checkout.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["edge-credit-card-works"]}>
        <div className={classes["edge-credit-card-works-container"]}>
          <h2>HOW IT WORKS</h2>
          <p>
            Adorama Financing offers instant personalized financing at checkout.
            We work with multiple lenders to find the best financing solution
            for you. See <a href="">financing details</a> for more information.⤉
          </p>
          <div className={classes["edge-credit-card-works-container-spec"]}>
            <div
              className={classes["edge-credit-card-works-container-spec-part"]}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <h3>Add To Cart</h3>
              <p>Browse Adorama products and add to your cart.</p>
            </div>
            <div
              className={classes["edge-credit-card-works-container-spec-part"]}
            >
              <i className="fa-solid fa-credit-card"></i>
              <h3>Checkout</h3>
              <p>
                At checkout, select “Apply for Adorama Edge Credit Card” in the
                Payment section.
              </p>
            </div>
            <div
              className={classes["edge-credit-card-works-container-spec-part"]}
            >
              <i className="fa-solid fa-stopwatch"></i>
              <h3>Apply for Financing</h3>
              <p>It’s fast, simple, safe, and secure.</p>
            </div>
            <div
              className={classes["edge-credit-card-works-container-spec-part"]}
            >
              <i className="fa-brands fa-cc-visa"></i>
              <h3>Use your Card</h3>
              <p>If approved, you can use your new credit card immediately.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["edge-credit-card-miss"]}>
        <div className={classes["edge-credit-card-miss-container"]}>
          <h2>Don't Miss Out!</h2>
          <p>
            Open an Adorama Edge Credit Card and take advantage of the perks
            that work for you. See if you pre-qualify with no impact to your
            credit bureau score.
          </p>
          <div className={classes["edge-credit-card-miss-container-btns"]}>
            <a>Apply Now</a>
            <p>or</p>
            <a>Pre-Qualify</a>
          </div>
        </div>
      </div>
      <div className={classes["edge-credit-card-accordion"]}>
        <h2>Frequently Asked Questions</h2>
        {accContent.map(({ title, content }) => {
          return (
            <Accordion
              title={title}
              content={content}
              classDiv={classes["edge-credit-card-accordion-part"]}
              classBtn={classes["active3"]}
              classBorder={classes["border3"]}
            />
          );
        })}
      </div>

      <div className={classes["edge-credit-card-terms"]}>
        <h3>TERMS & DISCLOSURES</h3>
        <p>
          ⤉ Financing details: Additional offers may be available that are not
          listed above. Subject to credit approval by each lender.
        </p>
        <p>Adorama Edge Credit Card, issued by Synchrony Bank.</p>
        <span>*No Interest if Paid in Full Within 6 or 12 Months</span>
        <p>
          6 Months Promotional Financing available on purchases of $199-$799.99.
          12 Months Promotional Financing available on purchases of $800 or
          more. Only valid on purchases made with the Adorama Edge Credit Card.
          Interest will be charged to your account from the purchase date if the
          promotional balance is not paid in full within 6 or 12 months. Minimum
          monthly payments required. Qualifying purchase amount must be on one
          receipt. No interest will be charged on the promo balance if you pay
          it off, in full, within the promo period. If you do not, interest will
          be charged on the promo balance from the purchase date. The required
          minimum monthly payments may or may not pay off the promo balance
          before the end of the promo period, depending on purchase amount,
          promo length and payment allocation. Regular account terms apply to
          non-promo purchases and, after promo period ends, to the promo
          balance. Subject to credit approval by Synchrony Bank. We reserve the
          right to discontinue or alter the terms of this offer anytime.
        </p>
        <p>
          */** For new accounts: Purchase APR is 29.99%. Minimum interest charge
          is $2. Existing cardholders: See your credit card agreement terms.
        </p>
        <p>
          †Subject to credit approval. Not applicable on gift cards. This offer
          cannot be combined with financing. The 5% discount will be applied
          after all other applicable discounts are applied at point of sale.
          Excludes taxes and shipping charges. We reserve the right to
          discontinue or alter the terms of this offer anytime. Offer only valid
          on purchases made with the Adorama Edge Credit Card, issued by
          Synchrony Bank.
        </p>
      </div>
    </section>
  );
}

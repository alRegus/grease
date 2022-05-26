import React, { useState, useRef } from "react";

import Modal from "../../../modal/Modal";
import classes from "./GiftCards.module.scss";

export default function GiftCards() {
  const [modal, setModal] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);
  const [postCheck, setPostCheck] = useState("email");
  const [sumCheck, setSumCheck] = useState();
  const [sumMessage, setSumMessage] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(false);

  const postHandler = (e) => {
    setPostCheck(e.target.value);
  };

  const sumHandler = (e) => {
    setSumCheck(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (sumCheck === undefined) setSumMessage(true);
    if (sumCheck) {
      setSumMessage(false);
      setSubmitMessage(true);
    }
  };

  const modalHandler = () => {
    setModal((prevState) => !prevState);
    document.body.style.overflow = modal ? "scroll" : "hidden";
    setWrongInput(false);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setWrongInput(true);
  };

  const inputModalElement = (
    <>
      <form action="#" onSubmit={formHandler}>
        <input
          placeholder="Gift Card Number"
          required
          style={wrongInput ? { borderColor: "#d83220" } : null}
        />
        {wrongInput && <span>This is not a valid gift card</span>}
        <button type="submit">Check Balance</button>
      </form>
    </>
  );

  return (
    <section className={classes["gift-card"]}>
      <img
        src="https://i.ibb.co/QPjYD5s/static-banners-giftcard-holiday2020.jpg"
        alt="gift-card"
      />
      <div className={classes["gift-card-desc"]}>
        <h1>The Adorama Gift Card</h1>
        <p>
          Adorama carries the best in musical gear from top brands. With an
          Adorama Gift Card, you can help your friends, coworkers, or loved ones
          find the right products to unleash their creativity.
        </p>
      </div>

      <form className={classes["gift-card-form"]} onSubmit={submitHandler}>
        <h2>GIFT CARD DETAILS</h2>
        <h3>Select Amount</h3>
        <div className={classes["gift-card-form-radio"]}>
          <div>
            <input
              id="v25"
              type="radio"
              data-value="$25"
              name="amountValue"
              value="GIFT25"
              onChange={sumHandler}
            />
            <label htmlFor="v25">$25</label>
          </div>
          <div>
            <input
              id="v30"
              type="radio"
              data-value="$30"
              name="amountValue"
              value="GIFT30"
              onChange={sumHandler}
            />
            <label htmlFor="v30">$30</label>
          </div>
          <div>
            <input
              id="v40"
              type="radio"
              data-value="$40"
              name="amountValue"
              value="GIFT40"
              onChange={sumHandler}
            />
            <label htmlFor="v40">$40</label>
          </div>
          <div>
            <input
              id="v50"
              type="radio"
              data-value="$50"
              name="amountValue"
              value="GIFT50"
              onChange={sumHandler}
            />
            <label htmlFor="v50">$50</label>
          </div>
          <div>
            <input
              id="v100"
              type="radio"
              data-value="$100"
              name="amountValue"
              value="GIFT100"
              onChange={sumHandler}
            />
            <label htmlFor="v100">$100</label>
          </div>
          <div>
            <input
              id="v250"
              type="radio"
              data-value="$250"
              name="amountValue"
              value="GIFT250"
              onChange={sumHandler}
            />
            <label htmlFor="v250">$250</label>
          </div>
          <div>
            <input
              id="v500"
              type="radio"
              data-value="$500"
              name="amountValue"
              value="GIFT500"
              onChange={sumHandler}
            />
            <label htmlFor="v500">$500</label>
          </div>
          <div>
            <input
              id="v600"
              type="radio"
              data-value="$600"
              name="amountValue"
              value="GIFT600"
              onChange={sumHandler}
            />
            <label htmlFor="v600">$600</label>
          </div>
          {sumMessage && (
            <p
              style={{
                fontSize: "0.8rem",
                marginTop: "10px",
                color: "#d83220",
              }}
            >
              Please select amount.
            </p>
          )}
        </div>
        <div className={classes["gift-card-form-radio"]}>
          <h3>Send Via</h3>
          <div>
            <input
              id="v-email"
              type="radio"
              name="via"
              value="email"
              onChange={postHandler}
            />
            <label htmlFor="">Email</label>
          </div>
          <div>
            <input
              id="v-post-email"
              type="radio"
              name="via"
              value="post"
              onChange={postHandler}
            />
            <label htmlFor="">Via post mail</label>
          </div>
          {postCheck === "email" && (
            <input
              type="email"
              placeholder="Recipient`s Email Address"
              required
            />
          )}
          {postCheck === "post" && (
            <p style={{ fontSize: "0.8rem" }}>
              We will mail the gift card to your selected address in shopping
              cart. (only one shipping address per order)
            </p>
          )}
        </div>
        <div className={classes["gift-card-form-radio"]}>
          <h3>
            Personalize Your Gift <span>(optional)</span>
          </h3>
          <input type="text" placeholder="To" />
          <input type="text" placeholder="Greeting(40 characters max) " />
          <input type="text" placeholder="From" />
        </div>
        {submitMessage && (
          <p
            style={{
              marginBlock: "10px",
              color: "#d83220",
            }}
          >
            Your country is not supported ;(
          </p>
        )}
        <button>Add to Cart</button>
      </form>

      <div className={classes["gift-card-list"]}>
        <h2>Terms and Conditions</h2>
        <ul>
          <li>Gift cards do not have an expiration date.</li>
          <li>
            The balance due on an order that exceeds the gift card amount must
            be paid by credit card.
          </li>
          <li>
            Any unused balance will be placed in the recipient's gift card
            account and is not transferable.
          </li>
          <li>Gift cards are non-transferable.</li>
          <li>
            Gift cards may not be purchased or redeemed for international
            orders.
          </li>
          <li>Gift cards cannot be used to purchase other gift cards.</li>
          <li>
            Gift cards are not redeemable for cash and cannot be returned for a
            refund.
          </li>
          <li>Gift card cash value is 1/10 of one cent.</li>
          <li>We are not responsible for lost or stolen gift cards.</li>
          <li>
            When redeeming a Gift cards in our store a proper ID with a valid US
            Address will be required.
          </li>
          <li>
            Adorama will have the right to close customer accounts and request
            alternative forms of payment if a fraudulently obtained gift
            certificate is either redeemed through the Adorama.com Web site or
            in our store.
          </li>
        </ul>
        <div className={classes["gift-card-check"]}>
          <h2>Already have an Adorama Gift Card?</h2>
          <button onClick={modalHandler}>Check gift card balance</button>
        </div>
      </div>
      {modal && (
        <Modal
          header="Check gift card balance"
          TextContent="Check the balance on your gift card or e-gift card by entering the card number from the back of your card below, or call 800-223-2500"
          closeHandler={modalHandler}
          addedContent={inputModalElement}
        />
      )}
    </section>
  );
}

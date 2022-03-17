import React from "react";

export default function GiftCards() {
  return (
    <section>
      <img
        src="https://i.ibb.co/QPjYD5s/static-banners-giftcard-holiday2020.jpg"
        alt="gift-card"
      />
      <div>
        <h1>The Adorama Gift Card</h1>
        <p>
          Adorama carries the best in musical gear from top brands. With an
          Adorama Gift Card, you can help your friends, coworkers, or loved ones
          find the right products to unleash their creativity.
        </p>
      </div>
      <h2>GIFT CARD DETAILS</h2>
      <form>
        <h5>Select Amount</h5>
        <div>
          <input
            id="v25"
            type="radio"
            data-value="$25"
            name="amountValue"
            value="GIFT25"
          />
          <label htmlFor="v25">$25</label>
          <input
            id="v30"
            type="radio"
            data-value="$30"
            name="amountValue"
            value="GIFT30"
          />
          <label htmlFor="v30">$30</label>
          <input
            id="v40"
            type="radio"
            data-value="$40"
            name="amountValue"
            value="GIFT40"
          />
          <label htmlFor="v40">$40</label>
          <input
            id="v50"
            type="radio"
            data-value="$50"
            name="amountValue"
            value="GIFT50"
          />
          <label htmlFor="v50">$50</label>
          <input
            id="v100"
            type="radio"
            data-value="$100"
            name="amountValue"
            value="GIFT100"
          />
          <label htmlFor="v100">$100</label>
          <input
            id="v250"
            type="radio"
            data-value="$250"
            name="amountValue"
            value="GIFT250"
          />
          <label htmlFor="v250">$250</label>
          <input
            id="v500"
            type="radio"
            data-value="$500"
            name="amountValue"
            value="GIFT500"
          />
          <label htmlFor="v500">$500</label>
          <input
            id="v600"
            type="radio"
            data-value="$600"
            name="amountValue"
            value="GIFT600"
          />
          <label htmlFor="v600">$600</label>
        </div>
        <div>
          <h5>Send Via</h5>
          <div>
            <input id="v-email" type="radio" name="via" value="email" />
            <label htmlFor="">Email</label>
            <input id="v-post-email" type="radio" name="via" value="post" />
            <label htmlFor="">Via post mail</label>
          </div>
          <input type="email" placeholder="Recipient`s Email Address" />
        </div>
        <div>
          <h5>
            Personalize Your Gift <span>(optional)</span>
          </h5>
          <input type="text" placeholder="To" />
          <input type="text" placeholder="Greeting(40 characters max) " />
          <input type="text" placeholder="From" />
        </div>
        <button>Add to Cart</button>
      </form>
      <div>
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
        <div>
          <p>Already have an Adorama Gift Card?</p>
          <button>Check gift card balance</button>
        </div>
      </div>
    </section>
  );
}

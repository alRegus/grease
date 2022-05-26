import React from "react";

import classes from "./StorePickup.module.scss";

export default function StorePickup() {
  return (
    <section className={classes["store-pickups"]}>
      <h1>Express Pickup</h1>
      <h2>Grease offers Express Pick-up for Online Orders</h2>
      <p>
        Buy online and pick-up fast in the store at the Express Pick-up Counter.
        You avoid shipping and scheduled delivery charges – and you may be able
        to get your order faster!
      </p>
      <h3>3 SIMPLE STEPS</h3>
      <p>
        <b>1.)</b> During checkout, select
        <b>“I’ll pick up items in the store”</b> when asked for your shipping
        address to pick up your merchandise in our store
      </p>
      <p>
        <b>2.)</b> Wait for an email confirming that your order is ready for
        pickup (Please note that this will be an additional email to your order
        confirmation)
      </p>
      <p>
        <b>3.)</b> Present a valid ID at the Express Pickup counter in our store
        (located at the back of our store by Customer Service) to pick up your
        order
      </p>
      <h3>FAQ</h3>
      <b>How do I know that an item is available for pick up?</b>
      <p>
        - As not all items are available for our Express Pickup service, you can
        call Customer Service in our store directly during store hours at{" "}
        <b>212.741.0063 x2131</b> to confirm item available for Express Pickup.
      </p>
      <b>Is every item available for pick up?</b>
      <p>- No, some items are only available for shipping or delivery.</p>
      <b>When do I go to the store?</b>
      <p>
        - You can come to our store to pick up your order as soon as you receive
        your pick up email
        <b>
          (please note that your order confirmation email is NOT your pick up
          email).
        </b>
      </p>
      <b>What are the store hours?</b>
      <p>- Store hours are as follows:</p>
      <b>The NYC Store Hours for Upcoming Holidays:</b>
      <p>Purim</p>
      <p>
        Thursday March 17th: <b>CLOSED</b>
      </p>
      <b>Sun</b>
      <p className={classes["store-pickups-time"]}>10:00am-5:00pm</p>
      <b>Mon-Thu</b>
      <p className={classes["store-pickups-time"]}>10:00am-7:00pm</p>
      <b>Fri</b>
      <p className={classes["store-pickups-time"]}>10:00am-5:00pm</p>
      <b>Sat</b>
      <p className={classes["store-pickups-time"]}>Closed</p>
      <b>Can someone else pick up my order?</b>
      <p>- Yes, you can send someone else to pick up your order.</p>
      <b>What do I bring with me to the store?</b>
      <p>- Bring your pick up email, a valid ID.</p>
      <b>Where do I go and what do I do?</b>
      <p>
        - When in store, you can proceed immediately to the Express Pickup
        counter, located by Customer Service. Simply present your pick up email,
        valid ID and you can pick up your order!
      </p>
      <b>How long will my order be available to pick up?</b>
      <p>
        - Once you have received your pick up email, Grease will hold your items
        at our Express Pickup counter for three (3) days for you to pick up.
      </p>
    </section>
  );
}

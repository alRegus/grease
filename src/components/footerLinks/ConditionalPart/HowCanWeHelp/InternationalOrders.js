import React from "react";

import classes from "./InternationalOrders.module.scss";

export default function InternationalOrders() {
  return (
    <section className={classes["international-shipping"]}>
      <h1>International Orders</h1>
      <h2>Do you ship internationally?</h2>
      <p>
        Yes, Adorama ships throughout the U.S., Canada and to over 200 countries
        worldwide. International shipments are subject to import fees, duties,
        and taxes (which are levied once a shipment reaches the destination
        country) in addition to the brokerage fees/custom clearance charges that
        may be imposed by the carrier. These charges must be borne by the
        recipient. Adorama has no control over these charges and cannot predict
        what they might be
      </p>
      <p>
        <a href="">
          Due to high international shipping costs, taxes, and duty fees, we
          cannot ship any order that includes backordered items. We will hold
          the order until all items are in stock and available to ship. Please
          contact us
        </a>{" "}
        if you wish to cancel or change these items.
      </p>
      <p>
        If an international shipment is refused and/or returned, any taxes,
        duties, custom fees, brokerage fees, or shipping charges incurred from
        this return will be the responsibility of the customer.
      </p>
      <p>
        International tax and duty: International shipments are subject to
        import fees, duties and taxes, which are levied once a shipment reaches
        their country, in addition to the brokerage fees/custom clearance
        charges which may be imposed by the carrier. These charges must be borne
        by the recipient. Adorama has no control over these charges and cannot
        predict what they might be.
      </p>
      <h2 className={classes["international-shipping-countries"]}>
        What countries does Adorama ship to?
      </h2>
      <p>
        Adorama ships throughout the U.S., Canada and to over 200 countries
        worldwide. Please see the listing here.
      </p>
      <select name="country" id="country">
        <option value="find">Find your county</option>
        <option value="russia">Russia</option>
        <option value="moldova">Moldova</option>
        <option value="hohlo">Ukrain</option>
        <option value="belarus">Belarus</option>
      </select>
    </section>
  );
}

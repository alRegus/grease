import React from "react";

import classes from "./Warranties.module.scss";

export default function Warranties() {
  return (
    <section className={classes["warranties"]}>
      <h1>Warranties</h1>
      <h2>New product Warranties</h2>
      <ul>
        <li>
          All new products are covered by the full manufacturer's warranty(N
          Condition).
        </li>
        <li>
          Refurbished equipment include a 90-day return-to-manufacturer warranty
          (unless stated otherwise)
        </li>
      </ul>
      <h2>Used product Warranties</h2>
      <ul>
        <li>
          Used photo equipment (D, E+, E, E-, V, and G conditions ) carry a
          180-day warranty. F condition items have a 30 day return policy, No
          Warranty. X condition items are final sale, for parts only, sold as
          is, no warranties or returns. See our{" "}
          <a href="">return policy here.</a>
        </li>
        <li>
          Used Video, Audio, Lighting and Computer equipment carry a 90-day
          warranty. F condition items have a 30 days return policy, no warranty.
          X condition items are final sale, for parts only sold as is, no
          warranties or returns.
        </li>
      </ul>
      <p>
        Adorama's warranty provides coverage for defects in manufacturing only,
        and expressly excludes coverage for excessive wear and tear and/or
        physical/accidental abuse, loss and theft.
      </p>
      <p>
        Adorama Used Dept. warranty: If an item is returned within the warranty
        period, we will inspect for warranty guidelines eligibility and if
        approved we will send the item to repair, if the item cannot be
        repaired, we will replace it at equal value, if replacement is not
        available we will issue a Store Credit.
      </p>
      <p>
        The warranty is valid only at Adorama Camera. Improper repair or
        warranty service performed by someone other than Adorama Camera will
        void this warranty.
      </p>
      <p>
        Adorama Camera disclaims any liability for consequential or incidental
        damages, for breach of written or implied warranty of an item, including
        merchantability or fitness for a particular purpose. An Adorama warranty
        provides specific legal rights; however, you may have additional rights,
        which vary from state to state.
      </p>
      <p>
        As some states do not allow the exclusion or limitation of incidental or
        consequential damages, the above limitation may not apply. Our warranty
        is valid only in the U.S. For additional information on how to obtain
        warranty service, please <a href="">contact us.</a>
      </p>
    </section>
  );
}

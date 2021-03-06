import React from "react";

import HelpPart from "./HelpPart";
import classes from "./Help.module.scss";

export default function Help() {
  return (
    <section className={classes["help-section"]}>
      <nav>
        <ul>
          <HelpPart
            icon="fa-solid fa-phone-flip"
            header="Give Us A Call"
            description="Questions? We’re happy to help! Call us at 800-223-2500"
            linkTo="#"
          />
          <HelpPart
            icon="fa-solid fa-envelope"
            header="Email Us"
            description="For questions or help with an order, you can send us an email anytime."
            linkTo="/help/contactUs"
          />
          <HelpPart
            icon="fa-solid fa-location-dot"
            header="Visit Our Store"
            description="Come visit our New York City store at 42 West 18th Street."
            linkTo="/info/store"
          />
        </ul>
      </nav>
    </section>
  );
}

import React from "react";

import CustomerService from "../components/footerLinks/CustomerService";
import HearFromYou from "../components/footerLinks/HearFromYou";
import classes from "./FooterLinksPage.module.scss";
import LetUsHelpYou from "../components/footerLinks/ConditionalPart/LetUsHelpYou";
import ShippingAndDelivery from "../components/footerLinks/ConditionalPart/ShippingAndDelivery";
import { useParams } from "react-router-dom";
import TrackOrder from "../components/footerLinks/ConditionalPart/TrackOrder";

export default function FooterLinksPage() {
  const parameter = useParams();
  const mainHelpDisplayCondition = parameter.type;

  let displayResult;
  switch (mainHelpDisplayCondition) {
    case "customerService":
      displayResult = <LetUsHelpYou />;
      break;
    case "trackOrder":
      displayResult = <TrackOrder />;
      break;
    case "shippingDelivery":
      displayResult = <ShippingAndDelivery />;
      break;
  }

  return (
    <section className={classes["help"]}>
      <CustomerService />
      {displayResult}
      <HearFromYou />
    </section>
  );
}

//!!исправить grid

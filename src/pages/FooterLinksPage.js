import React from "react";
import { useParams } from "react-router-dom";

import CustomerService from "../components/footerLinks/CustomerService";
import HearFromYou from "../components/footerLinks/HearFromYou";
import classes from "./FooterLinksPage.module.scss";
import LetUsHelpYou from "../components/footerLinks/ConditionalPart/HowCanWeHelp/LetUsHelpYou";
import TrackOrder from "../components/footerLinks/ConditionalPart/HowCanWeHelp/TrackOrder";
import ShippingAndDelivery from "../components/footerLinks/ConditionalPart/HowCanWeHelp/ShippingAndDelivery";
import StorePickup from "../components/footerLinks/ConditionalPart/HowCanWeHelp/StorePickup";
import InternationalOrders from "../components/footerLinks/ConditionalPart/HowCanWeHelp/InternationalOrders";
import ReturnPolicy from "../components/footerLinks/ConditionalPart/HowCanWeHelp/ReturnPolicy";
import ContactUs from "../components/footerLinks/ConditionalPart/HowCanWeHelp/ContactUs";
import Warranties from "../components/footerLinks/ConditionalPart/HowCanWeHelp/Warranties";

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
    default:
      displayResult = <LetUsHelpYou />;
  }

  return (
    <section className={classes["help"]}>
      <CustomerService />
      {/* {displayResult} */}
      <ContactUs />
      <HearFromYou />
    </section>
  );
}

//!!исправить grid

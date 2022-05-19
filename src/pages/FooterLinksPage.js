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
import DepartmentsAndServices from "../components/footerLinks/ConditionalPart/Other/DepartmentsAndServices";
import OrderInformation from "../components/footerLinks/ConditionalPart/Other/OrderInformation";
import GiftCertificates from "../components/footerLinks/ConditionalPart/Other/GiftCertificates";
import Downloadables from "../components/footerLinks/ConditionalPart/Other/Downloadables";
import CorporateAccounts from "../components/footerLinks/ConditionalPart/Other/CorporateAccounts";
import GovernmentAccounts from "../components/footerLinks/ConditionalPart/Other/GovernmentAccounts";
import GeneralInfo from "../components/footerLinks/ConditionalPart/Other/GeneralInfo";
import TermsAndConditions from "../components/footerLinks/ConditionalPart/Other/TermsAndConditions";
import PublicPrivacy from "../components/footerLinks/ConditionalPart/Other/PublicPrivacy";
import SafeShopping from "../components/footerLinks/ConditionalPart/Other/SafeShopping";
import PaymentMethods from "../components/footerLinks/ConditionalPart/Other/PaymentMethods";
import BuyingSellingUsed from "../components/footerLinks/ConditionalPart/Other/BuyingSellingUsed";

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
    case "storePickups":
      displayResult = <StorePickup />;
      break;
    case "internationalOrders":
      displayResult = <InternationalOrders />;
      break;
    case "returnPolicy":
      displayResult = <ReturnPolicy />;
      break;
    case "contactUs":
      displayResult = <ContactUs />;
      break;
    case "warranties":
      displayResult = <Warranties />;
      break;
    case "DepartmentsAndServices":
      displayResult = <DepartmentsAndServices />;
      break;
    case "ordering":
      displayResult = <OrderInformation />;
      break;
    case "GiftCertificates":
      displayResult = <GiftCertificates />;
      break;
    case "downloadables":
      displayResult = <Downloadables />;
      break;
    case "corporateAccounts":
      displayResult = <CorporateAccounts />;
      break;
    case "governmentAccounts":
      displayResult = <GovernmentAccounts />;
      break;
    case "GeneralInfo":
      displayResult = <GeneralInfo />;
      break;
    case "termsAndConditions":
      displayResult = <TermsAndConditions />;
      break;
    case "privacy":
      displayResult = <PublicPrivacy />;
      break;
    case "safeShopping":
      displayResult = <SafeShopping />;
      break;
    case "paymentMethods":
      displayResult = <PaymentMethods />;
      break;
    case "usedMarketplace":
      displayResult = <BuyingSellingUsed />;
      break;
    default:
      displayResult = <LetUsHelpYou />;
  }

  const trackOrder =
    mainHelpDisplayCondition === "trackOrder" ? "help-track" : "help";

  return (
    <section className={classes[`${trackOrder}`]}>
      <CustomerService />
      {displayResult}
      {mainHelpDisplayCondition !== "trackOrder" && <HearFromYou />}
    </section>
  );
}

//!!исправить grid

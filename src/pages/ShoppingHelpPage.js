import React from "react";
import { useParams } from "react-router-dom";

import GiftCards from "../components/footerLinks/ConditionalPart/ShoppingHelp/GiftCards";
import Vip from "../components/footerLinks/ConditionalPart/ShoppingHelp/Vip";
import Rewards from "../components/footerLinks/ConditionalPart/ShoppingHelp/Rewards";
import EdgeCreditCard from "../components/footerLinks/ConditionalPart/ShoppingHelp/EdgeCreditCard";
import StudentsDiscount from "../components/footerLinks/ConditionalPart/ShoppingHelp/StudentsDiscount";

export default function ShoppingHelpPage() {
  const params = useParams();
  const type = params.nspcType;

  let component;
  switch (type) {
    case "giftCards":
      component = <GiftCards />;
      break;
    case "vip360":
      component = <Vip />;
      break;
    case "rewards":
      component = <Rewards />;
      break;
    case "edgeCredit":
      component = <EdgeCreditCard />;
      break;
    case "studentDiscount":
      component = <StudentsDiscount />;
      break;
    default:
      component = <GiftCards />;
  }

  return <section>{component}</section>;
}

import React from "react";

import GiftCards from "../components/footerLinks/ConditionalPart/ShoppingHelp/GiftCards";
import Vip from "../components/footerLinks/ConditionalPart/ShoppingHelp/Vip";
import Rewards from "../components/footerLinks/ConditionalPart/ShoppingHelp/Rewards";
import EdgeCreditCard from "../components/footerLinks/ConditionalPart/ShoppingHelp/EdgeCreditCard";
import StudentsDiscount from "../components/footerLinks/ConditionalPart/ShoppingHelp/StudentsDiscount";

export default function ShoppingHelpPage() {
  return (
    <section>
      <StudentsDiscount />
    </section>
  );
}

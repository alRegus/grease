import React from "react";

import CustomerService from "../components/footerLinks/CustomerService";
import HearFromYou from "../components/footerLinks/HearFromYou";
import classes from "./FooterLinksPage.module.scss";
import LetUsHelpYou from "../components/footerLinks/ConditionalPart/LetUsHelpYou";

export default function FooterLinksPage() {
  return (
    <section className={classes["help"]}>
      <CustomerService />
      <LetUsHelpYou />
      <HearFromYou />
    </section>
  );
}

//!!исправить grid

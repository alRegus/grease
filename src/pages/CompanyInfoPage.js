import React from "react";
import { useParams } from "react-router-dom";

import AboutUs from "../components/footerLinks/ConditionalPart/CompanyInfo/AboutUs";
import OurHistory from "../components/footerLinks/ConditionalPart/CompanyInfo/OurHistory";
import OurStore from "../components/footerLinks/ConditionalPart/CompanyInfo/OurStore";

export default function CompanyInfoPage() {
  const params = useParams();
  const type = params.infoType;

  let component;
  switch (type) {
    case "aboutUs":
      component = <AboutUs />;
      break;
    case "history":
      component = <OurHistory />;
      break;
    case "store":
      component = <OurStore />;
      break;
    default:
      component = <AboutUs />;
  }

  return <div>{component}</div>;
}

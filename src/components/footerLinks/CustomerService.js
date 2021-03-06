import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useWidth from "../../hooks/useWidth";
import classes from "./CustomerService.module.scss";

export default function CustomerService() {
  const width = useWidth();
  const param = useParams();

  useEffect(() => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
  }, [param.type]);

  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);

  return (
    <section className={classes["help-customer"]}>
      <Link
        to="/help/customerService"
        className={classes["help-customer-header"]}
      >
        Customer Service
      </Link>
      <div>
        <h2
          onClick={() =>
            width <= 801 ? setAccordion1(!accordion1) : setAccordion1(false)
          }
        >
          Let Us Help You{" "}
          {width <= 801 && !accordion1 && <i className="fa-solid fa-plus"></i>}
        </h2>
        <ul style={accordion1 ? { display: "block" } : null}>
          <li>
            <Link to="/help/trackOrder">Track Your Order</Link>
          </li>
          <li>
            <Link to="/help/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/help/DepartmentsAndServices">
              Departments & Services
            </Link>
          </li>
          <li>
            <Link to="/info/store">Map and Directions</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2
          onClick={() =>
            width <= 801 ? setAccordion2(!accordion2) : setAccordion2(false)
          }
        >
          Ordering Information{" "}
          {width <= 801 && !accordion2 && <i className="fa-solid fa-plus"></i>}
        </h2>
        <ul style={accordion2 ? { display: "block" } : null}>
          <li>
            <Link to="/help/faq">FAQ`s</Link>
          </li>
          <li>
            <Link to="/help/shippingDelivery">Shipping & Delivery</Link>
          </li>
          <li>
            <Link to="/help/storePickups">In-Store Pickup</Link>
          </li>
          <li>
            <Link to="/help/usedMarketplace">Buying and Selling Used</Link>
          </li>
          <li>
            <Link to="/help/returnPolicy">Return Policy</Link>
          </li>
          <li>
            <Link to="/help/warranties">Warranties</Link>
          </li>
          <li>
            <Link to="/help/internationalOrders">International Orders</Link>
          </li>
          <li>
            <Link to="/help/paymentMethods">Payment Methods</Link>
          </li>
          <li>
            <Link to="/help/safeShopping">Safe Shopping</Link>
          </li>
          <li>
            <Link to="/help/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/help/termsAndConditions">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/help/ordering">Ordering</Link>
          </li>
          <li>
            <Link to="/help/GeneralInfo">General Information</Link>
          </li>
          <li>
            <Link to="/help/GiftCertificates">Gift Certificates</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2
          onClick={() =>
            width <= 801 ? setAccordion3(!accordion3) : setAccordion3(false)
          }
        >
          Ways to Shop{" "}
          {width <= 801 && !accordion3 && <i className="fa-solid fa-plus"></i>}
        </h2>
        <ul style={accordion3 ? { display: "block" } : null}>
          <li>
            <Link to="/help/governmentAccounts">Goverment Accounts</Link>
          </li>
          <li>
            <Link to="/help/corporateAccounts">Corporate Accounts</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2
          onClick={() =>
            width <= 801 ? setAccordion4(!accordion4) : setAccordion4(false)
          }
        >
          Downloadable Software{" "}
          {width <= 801 && !accordion4 && <i className="fa-solid fa-plus"></i>}
        </h2>
        <ul style={accordion4 ? { display: "block" } : null}>
          <li>
            <Link to="/help/downloadables">Downloadables</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

import React from "react";
import { HashLink } from "react-router-hash-link";

import classes from "./ShippingAndDelivery.module.scss";

//!! НЕ ЗАБЫТЬ СДЕЛАТЬ ССЫЛКИ

export default function ShippingAndDelivery() {
  return (
    <section className={classes["shipping-delivery"]}>
      <div className={classes["shipping-delivery-links"]}>
        <h2 id="top">Shipping & Delivery</h2>
        <div>
          <ul>
            <li>
              <a href="#charge">What do you charge for standard shipping?</a>
            </li>
            <li>
              <a href="#order-line">
                I just placed an order online. When will I receive my
                merchandise?
              </a>
            </li>
            <li>
              <a href="#counties">What are your shipping destinations?</a>
            </li>
            <li>
              <a href="#sign">Will I have to sign for my package?</a>
            </li>
            <li>
              <a href="#damage-missing">
                What do I do if there are damaged or missing items upon
                delivery?
              </a>
            </li>
            <li>
              <a href="#internationally">Do you ship internationally?</a>
            </li>
            <li>
              <a href="#counties">What countries does Grease ship to?</a>
            </li>
            <li>
              <a href="#receiving">
                How long will it be before I receive my order?
              </a>
            </li>
            <li>
              <a href="#expedite">Can I expedite shipping?</a>
            </li>
            <li>
              <a href="#military">
                Do you ship to P.O. boxes or military APO/FPO addresses?
              </a>
            </li>
            <li>
              <a href="#track-order">How can I track my order?</a>
            </li>
            <li>
              <a href="#requirements">What Are the Delivery Requirements?</a>
            </li>
            <li>
              <a href="#online">
                How can I buy online and pick up my merchandise in the store?
              </a>
            </li>
            <li>
              <a href="#free-shipping">
                Will I get free expedited shipping on my order?
              </a>
            </li>
            <li>
              <a href="#rules">
                What are the rules for transporting Hazardous Goods?
              </a>
            </li>
            <li>
              <a href="#offer-free">Do you offer Free Shipping?</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["shipping-delivery-info"]} id="charge">
        <div className={classes["shipping-delivery-info-segment"]}>
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>What do you charge for standard shipping?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              Shipping charges are not included in our pricing. Please place
              your order in the Shopping Cart to view shipping charges.
            </p>
            <p>
              Special shipping rules apply to GSA, Federal and Local Government,
              and Educational customers. Please visit your homepage for details.
            </p>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="order-line"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>
              I just placed an order online. When will I receive my merchandise?
            </h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              Grease Camera makes every effort to get your order to you as soon
              as possible. Regular orders for in-stock items placed on business
              days before 2:00 PM ET (Eastern Time) and Rush orders before 4:00
              PM ET are generally shipped the same day (subject to verification,
              <HashLink to="/help/ordering#verify-order">
                click here
              </HashLink>{" "}
              for details). Please note weekend orders, placed on Fridays after
              12:00 PM ET will be processed on the following Monday. If there is
              a problem with your order, you will receive an e-mail within one
              business day to advise you about the situation.
            </p>
            <h5>Used items:</h5>
            <p>
              Most orders get shipped the same day if received, processed and
              verified by 1:00 P.M. ET (Eastern Time) Monday - Thursday, and
              before 8:30 A.M. ET (Eastern Time) on Friday. Orders received
              after these times or those which require verification (see below)
              will be processed the next business day.
            </p>
            <h5>Delivery of Oversize items:</h5>
            <p>
              Oversize items that are required to ship via truck due to their
              size or weight, generally take an extra day to ship. The average
              delivery time is 7-10 business days. Rural or remote delivery
              locations can sometimes take slightly longer.
            </p>
            <p>
              All truck deliveries are made by appointment which must be
              scheduled in advance. The carrier will reach out to you by phone
              or email to set up this appointment. An adult must be available to
              receive, inspect, and sign for the merchandise at the time of
              delivery. A rescheduling fee may be applied for a missed delivery
              appointment, subject to carrier policy.
            </p>
            <p>
              All deliveries are to the threshold of your location during
              standard business hours. White glove, inside delivery, evening,
              early morning, or weekend deliveries are sometimes able to be
              scheduled with the carrier for an additional cost. Grease cannot
              guarantee the availability or cover the additional cost of these
              extra services.
            </p>
            <p>
              Truck deliveries are unavailable to PO boxes, APO/FPO locations,
              or outside of the continental 48 states.
            </p>
          </div>
        </div>
        <div className={classes["shipping-delivery-info-segment"]} id="sign">
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>Will I have to sign for my package?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              A signature is required for most UPS shipments upon receipt. An
              adult must be at the address to receive the package and sign for
              it. Packages cannot be rerouted or picked up from UPS. If UPS is
              unable to successfully deliver your package they may bring your
              package to a UPS Access Point or they will re-attempt delivery up
              to 3 times, at their discretion.
            </p>
            <p>
              If you require additional help to receive your package, please{" "}
              <HashLink to="/help/contactUs">contact us</HashLink>.
            </p>
            <p>
              Oversize items shipped by Truck are delivered by appointment which
              must be scheduled in advance. The carrier will reach out to you by
              phone or email to set up this appointment. An adult must be
              available to receive, inspect, and sign for the merchandise at the
              time of delivery. A rescheduling fee may be applied for a missed
              delivery appointment, subject to carrier policy.
            </p>
            <p>
              All deliveries are to the threshold of your location during
              standard business hours Monday through Friday. White glove, inside
              delivery, evening, early morning, or weekend deliveries are
              sometimes able to be scheduled with the carrier for an additional
              cost. Grease cannot guarantee the availability or cost of these
              extra services.
            </p>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="damage-missing"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>
              What do I do if there are damaged or missing items upon delivery?
            </h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              <span>Damaged in delivery:</span> If there is damage to the
              package, or if merchandise is missing, please keep the original
              shipping carton and contact us immediately so we can issue a
              damage claim with the carrier. Please don't return the merchandise
              without going through these steps, as it delays the replacement of
              the order or the issuance of a credit.
            </p>
            <p>
              <span>Missing items:</span> All missing items claims must be
              reported within five business days of delivery. Contact us to
              report a missing item from your shipment.
            </p>
            <p>
              <span>Oversize truck deliveries:</span> Oversize items shipped by
              Truck are delivered by appointment which needs to be scheduled
              with carrier in advance. At time of delivery, an adult must be
              available to receive, inspect, and sign for the merchandise.
              Please inspect the item to be sure it is the correct model, in
              operable condition, and not damaged in any way. Do not sign the
              delivery manifest until you have inspected the item. Once the
              delivery manifest is signed, we are unable to file any damage
              claim with the carrier on your behalf. Once you sign for the item,
              you are accepting the product as is.
            </p>
            <p>
              If the merchandise is damaged, please make a notation on the
              delivery manifest, and have the person delivering the merchandise
              sign as well. <HashLink to="/help/contactUs">Contact us</HashLink>{" "}
              within 48 business hours to report the damage.
            </p>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="internationally"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>Do you ship internationally?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              Yes, Grease ships throughout the U.S., Canada and to over 200
              countries worldwide. International shipments are subject to import
              fees, duties, and taxes (which are levied once a shipment reaches
              the destination country) in addition to the brokerage fees/custom
              clearance charges that may be imposed by the carrier. These
              charges must be borne by the recipient. Grease has no control over
              these charges and cannot predict what they might be
            </p>
            <p>
              Due to high international shipping costs, taxes, and duty fees, we
              cannot ship any order that includes backordered items. We will
              hold the order until all items are in stock and available to ship.
              Please <HashLink to="/help/contactUs">contact us</HashLink> if you
              wish to cancel or change these items.
            </p>
            <p>
              If an international shipment is refused and/or returned, any
              taxes, duties, custom fees, brokerage fees, or shipping charges
              incurred from this return will be the responsibility of the
              customer.
            </p>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="counties"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>What countries does Grease ship to?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              Grease ships throughout the U.S., Canada and to over 200 countries
              worldwide. Please see the listing here.
            </p>
            <select name="country" id="country">
              <option value="find">Find your county</option>
              <option value="russia">Russia</option>
              <option value="moldova">Moldova</option>
              <option value="hohlo">Ukrain</option>
              <option value="belarus">Belarus</option>
            </select>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="receiving"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>How long will it be before I receive my order?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              Orders are generally delivered based on the shipping timeframe
              selected during checkout.
            </p>
            <p>
              Please allow additional time for shipments to U.S. territories,
              P.O. boxes, or military APO/FPO addresses.
            </p>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="expedite"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>Can I expedite shipping?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              There are generally options that allow for expedited shipping that
              are displayed at checkout, at an additional cost, subject to terms
              and conditions of inventory etc...
            </p>
            <p>
              Orders for in-stock items placed on business days are typically
              shipped the same day (subject to verification,{" "}
              <HashLink to="/help/ordering#verify-order">click here</HashLink>{" "}
              for details). Please note weekend orders, placed on Fridays after
              1:00 PM ET will be processed on the following Monday.
            </p>
            <p>Standard Shipping Options</p>
            <ul>
              <li>Super Saver (7-10 Business Days)</li>
              <li>Standard Shipping 3-7 Business Days</li>
              <li>UPS 3 Business Days</li>
              <li>UPS 2 Business Days Air</li>
              <li>UPS Next Business Day Air</li>
              <li>USPS Priority Mail</li>
            </ul>
            <p>
              Sorry, expedited shipping is not available for shipments to, U.S.
              territories, P.O. boxes, or military APO/FPO addresses. Please
              allow additional time for orders shipped to these addresses.
            </p>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="military"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>Do you ship to P.O. boxes or military APO/FPO addresses?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              Shipments can be sent to both P.O. boxes and military APO/FPO
              addresses. Note: Please allow 6-8 weeks for orders shipped to
              military APO/FPO addresses for them to be delivered.
            </p>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="track-order"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>How can I track my order?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              Once an order has shipped out, we will send you an e-mail with the
              tracking number. Just click on the link and it will take you to
              the carrier's website.
            </p>
            <p>
              You can also track your order by{" "}
              <HashLink to="/help/trackOrder">click</HashLink> here and:
            </p>
            <ul>
              <li>
                Enter the Grease Order number as well as the billing zip code or
                email address associated with the order. OR
              </li>
              <li>
                If you have an Grease account, simply log into your account
                using your e-mail address and password, then click on your order
                number in your order history. The tracking number will appear
                under the Status & Tracking column. If you click on the link, it
                will take you to the tracking information for your order.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="requirements"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>What Are the Delivery Requirements?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              A signature is required for most UPS shipments upon receipt.
              Someone must be at the address to receive the package and sign for
              it. Packages cannot be rerouted or picked up from UPS. If you
              require additional help to receive your package, please{" "}
              <HashLink to="/help/contactUs">contact us</HashLink>.
            </p>
          </div>
        </div>
        <div className={classes["shipping-delivery-info-segment"]} id="online">
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>
              How can I buy online and pick up my merchandise in the store?
            </h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              Grease offers the convenience of in-store pickup at our retail
              store located at 42 West 18th Street, New York City, NY 10011.{" "}
              <HashLink to="/info/store">See Map</HashLink> /{" "}
              <HashLink to="/info/store#our-store-directions">
                See directions
              </HashLink>
            </p>
            <p>
              <span>Simple steps:</span>
            </p>
            <ul className={classes["shipping-delivery-info-segment-body-ul"]}>
              <li>
                Choose the in-store pickup option located at the top of the
                checkout page.
              </li>
              <li>
                You will receive an email indicating that "Your order is ready
                for in-store pickup"
              </li>
              <li>
                You can pick up the order during store hours{" "}
                <HashLink to="/info/store">See Here</HashLink>.
              </li>
              <li>
                To pick up your order, please bring your Credit Card which will
                be charged at time of pickup.
              </li>
              <div>
                <p>
                  Note: Only the person who placed the order and is listed on
                  the purchasing credit card may pick it up.
                </p>
                <p>Call us at 1-212-741-0063 with any questions.</p>
              </div>
            </ul>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="free-shipping"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>Will I get free expedited shipping on my order?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              Most items will be eligible for free, expedited (1-3 Day) shipping
              when ordered through our web site. Some Items are excluded. You'll
              see notes on eligible product pages, and you'll automatically have
              a notice in your shopping cart at check out whenever your order is
              eligible.
            </p>
            <p>
              Orders must be greater than $49 to qualify, and must be shipping
              within the *contiguous 48 U.S. states*. PO box addresses as well
              as shipping to Hawaii, Alaska or Puerto Rico are not included in
              this offer.
              <span>
                This offer is a benefit of Grease VIP and valid on all
                qualifying VIP customer purchases
              </span>
              , and cannot be combined with additional discounts, closeout
              sales, special offers, etc.
            </p>
            <p>
              To check the shipping charges for different shipping methods or
              for international shipping, please add the items to your shopping
              cart.
            </p>
          </div>
        </div>
        <div className={classes["shipping-delivery-info-segment"]} id="rules">
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>What are the rules for transporting Hazardous Goods?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>
              This item cannot be shipped outside the USA and must ship via UPS
              Ground. Pursuant to terms as defined{" "}
              <a
                href="https://www.ups.com/us/en/support/shipping-support/shipping-special-care-regulated-items.page"
                target="_blank"
                rel="noreferrer"
              >
                This item cannot be shipped outside the USA and must ship via
                UPS Ground. Pursuant to terms as defined here
              </a>
            </p>
          </div>
        </div>
        <div
          className={classes["shipping-delivery-info-segment"]}
          id="offer-free"
        >
          <div className={classes["shipping-delivery-info-segment-heading"]}>
            <h2>Do you offer Free Shipping?</h2>
            <a href="#top">Return to Top</a>
          </div>
          <div className={classes["shipping-delivery-info-segment-body"]}>
            <p>Free Shipping (All types)</p>
            <ul>
              <li>
                <span>Free Shipping (Super Saver): </span>Qualifying items are
                normally delivered in 7-10 Business Days
              </li>
              <li>
                <span>Free 3 day Shipping:</span>Qualifying items are normally
                delivered within 3 Business Days
              </li>
              <li>
                <span>Free 2 day Shipping:</span>Qualifying items are normally
                delivered within 2 Business Days
              </li>
              <li>
                <span>Free Overnight Shipping:</span>Qualifying items are
                normally delivered within 1 Business Day
              </li>
              <li>
                <span>Free Expedited Shipping:</span>Orders must be greater than
                $49; Qualifying items are normally delivered within 1-3 Business
                Days
              </li>
              <li>
                <span>VIP360 Free 2-Day Delivery:</span> Qualifying items are
                normally delivered to VIP360 customers within 2 Business Days
              </li>
              <li>
                <span>Rules (All Free Shipping Types):</span>
              </li>
              <li>Qualifying items must be ordered via www.Grease.com.</li>
              <li>Free shipping is for the 48 Contiguous States only.</li>
              <li>
                Excludes PO Boxes, Alaska, FPO/APO, Hawaii, Puerto Rico and
                Guam.
              </li>
              <li>
                Offer cannot be combined with additional discounts, closeout
                sales, special offers etc.
              </li>
              <li>
                If your order also contains items that don't qualify for FREE
                SHIPPING you'll be charged shipping charge only for the weight
                for those items.
              </li>
              <li>
                If you delete a qualifying item from cart, initial shipping
                charge will be reinstated.
              </li>
              <li>
                Canceling items, combining orders, or changing your shipping
                address speed or preference might affect your eligibility for
                "FREE SHIPPING".
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

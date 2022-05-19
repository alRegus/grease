import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Accordion from "./Accordion";
import useWidth from "../../../../hooks/useWidth";
import classes from "./Vip.module.scss";

const accordionContent = [
  {
    title: "Free 2-Day Shipping",
    content: `<p>
  For just $49.99/year your order of qualifying Adorama products
  will arrive at your door in 2 business days or less. All
  additional shipping options are still available in case you need
  it faster or want to pick it up in our store.
</p>
<p>
  Thousands more products ship free when they’re in the shopping
  cart with a VIP360 product.
</p>
<p>
  2-Day Delivery is limited to the 48 contiguous United States. PO
  Boxes, APOs/FPOs/DPOs, Hawaii, Puerto Rico, Alaska and Guam are
  excluded.
</p>`,
  },
  {
    title: "60-Day Return Policy",
    content: `<p>
  VIP360 members have the option to return VIP360 products for up to
  60 days from purchase. Return shipping is also free. For a free
  shipping label please email us at
  <a href="">VIP360@adorama.com</a> or call us at
  <a href="">212.741.0052.</a>
</p>`,
  },
  {
    title: "Effortless Product Protection",
    content: `<p>
  Use your gear more. Worry less. While you're a VIP360 member, the
  new products you buy from Adorama come with automatic 1-year
  damage protection. If anything happens, we'll repair or replace at
  no charge. (Some exclusions apply.)
</p>`,
  },
  {
    title: "Dedicated Customer Service",
    content: `<p>
  A team of customer service representatives is dedicated
  exclusively to VIP360 members. To reach them, email
  VIP360@adorama.com or call 1-800-811-4001.
</p>
<p>Hours of Operation:</p>
<ul>
<li>Monday – Thursday: 9:00am – 7:30pm</li>
<li>Friday – 9:00am – 5:00pm</li>
<li>Sunday - 9:30am – 5:00pm</li>
</ul>`,
  },
  {
    title: "Members-Only Discounts & Perks",
    content: `<p>Enjoy discounts & perks as a VIP360 member including:</p>
  <ul>
    <li>Exclusive VIP360 member-only contests</li>
    <li>
      Early-bird access to discounts, sales and Adorama-sponsored
      events
    </li>
    <li>Special discounts from select Adorama partners</li>
  </ul>`,
  },
];

export default function Vip() {
  const [displayh5, setDisplayh5] = useState(1);

  const width = useWidth();

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayh5((prevState) => prevState + 1);
      if (displayh5 === 5) {
        setDisplayh5(1);
      }
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <section className={classes["vip"]}>
      <div className={classes["vip-header"]}>
        <div>
          <h1>
            <img src="https://i.ibb.co/BKyR2Xm/VIP360-Logo.png" alt="vip" />
          </h1>
          <p>
            All the Adorama quality and value you appreciate—with extra perks
          </p>
          <b>Just $49.99 a year</b>
          <div>
            <Link to="/login">Join Now</Link>
            <Link to="/login">Member Login</Link>
          </div>
        </div>
        {width > 801 && (
          <>
            <div>
              {displayh5 === 1 && <h5>Dedicated Customer Service</h5>}
              {displayh5 === 2 && <h5>Members-Only Discounts & Perks</h5>}
              {displayh5 === 3 && <h5>1-Year “Drops & Spills” Protection</h5>}
              {displayh5 === 4 && <h5>60-Day Return Policy</h5>}
              {displayh5 === 5 && <h5>Free 2-Day Shipping</h5>}
            </div>
          </>
        )}
      </div>
      <p className={classes["vip-passion"]}>
        Now you can feed your passion for photography, video and audio—and pick
        up VIP360 perks at the same time.
      </p>
      <div className={classes["vip-cards1"]}>
        <div className={classes["vip-cards1-card"]}>
          {" "}
          {/* !!повтор, подумать над отдельным компонентом */}
          <h4>Free</h4>
          <strong>2-Day Shipping</strong>
          <p>
            Buy one of the thousands of VIP360 products at Adorama, and it will
            be delivered within 2 business days. Exclusions apply.
          </p>
        </div>
        <div className={classes["vip-cards1-card"]}>
          {" "}
          <h4>60-Day</h4>
          <strong>Return Policy</strong>
          <p>
            Buy with confidence. As a member, you get 60 days to return VIP360
            products and return shipping is FREE, too.
          </p>
        </div>
        <div className={classes["vip-cards1-card"]}>
          {" "}
          <h4>1-Year</h4>
          <strong>Grease Protect</strong>
          <p>
            Worry less about accidental drops & spills. As part of your
            membership, you will receive 1-year accidental damage protection
            from the date of your product purchase.
          </p>
        </div>
      </div>
      <div className={classes["vip-cards2"]}>
        <div className={classes["vip-cards2-card"]}>
          {" "}
          <h4>Dedicated</h4>
          <strong>Customer Service</strong>
          <p>
            Get access to a team of customer service representatives exclusive
            for VIP360 members.
          </p>
        </div>
        <div className={classes["vip-cards2-card"]}>
          {" "}
          <h4>Member-Only</h4>
          <strong>Discounts & Perks</strong>
          <p>
            Enjoy first dibs on our best deals, Adorama sponsored events,
            partner discounts, and more.
          </p>
        </div>
      </div>
      <div className={classes["vip-renew"]}>
        <p>
          For your convenience, membership will automatically renew every year.
        </p>
      </div>
      <div className={classes["vip-accordions"]}>
        <center>
          <img src="https://i.ibb.co/BKyR2Xm/VIP360-Logo.png" alt="vip" />
          <h2>Get to know your VIP360 Perks</h2>
          <p>
            Whether you’re a dedicated pro or a passionate hobbyist, you can get
            the gear you need at a great price, and all these extra perks you
            get for being a VIP360 member.
          </p>
        </center>

        <div className={classes["vip-accordions-accordion"]}>
          {accordionContent.map(({ title, content }) => {
            return (
              <Accordion
                title={title}
                content={content}
                classDiv={classes["vip-accordions-accordion"]}
                classBtn={classes["active"]}
                classBorder={classes["border"]}
              />
            );
          })}
        </div>
      </div>
      <div className={classes["vip-terms"]}>
        <h2>VIP360 Terms & Conditions</h2>
        <p>
          Membership to the VIP360 Program is limited to individuals only and is
          limited to one account per individual. Employees, officers, directors,
          agents and representatives of Adorama, Inc. are eligible for
          membership but may be excluded from certain promotions. You must be
          age 18 years or older and a legal resident of the United States to be
          eligible.
        </p>
        <p>
          By submitting an application for the VIP or VIP360 Program, you agree
          to be bound by these terms and conditions. No purchase is necessary to
          become a VIP member. Membership to the VIP360 Program is available for
          purchase for $49.99 for the duration of one year. The Program is void
          where prohibited by law.
        </p>
        <p>
          VIP360 is available for $49.99 for one year. Taxes may apply on the
          VIP360 membership fee. The program will automatically renew after one
          year unless canceled on the account management page. Unless you notify
          us before a charge that you want to cancel or do not want to
          auto-renew, you understand your VIP360 membership will automatically
          continue and you authorize us (without notice to you, unless required
          by applicable law) to collect the then-applicable membership fee and
          any taxes, using any credit card we have on record for you.
        </p>
        <h5>Free 2-Day Guaranteed Delivery Policy</h5>
        <p>
          Most items are eligible for Free 2-Day Guaranteed delivery when
          ordered through <Link to="/">adorama.com</Link> or by phone:{" "}
          <a href="tel:855-291-3845">855-291-3845</a>. Look for the VIP360 icons
          on eligible product pages, and you'll automatically have a notice in
          your shopping cart and at checkout whenever your order is eligible.
          Some exclusions apply. Any item that doesn’t have a message indicating
          that it’s eligible for VIP360 on its product page doesn’t qualify.
          Excluded items include but are not limited to: drop-shipped items,
          oversized items, TVs and Monitors greater than 32”, printers
          containing ink, hazardous goods that must be shipped by UPS Ground.
          For full list{" "}
          <a
            href="https://www.ups.com/us/en/support/shipping-support/"
            target="_blank"
          >
            Click here.
          </a>
        </p>
        <p>
          Orders must be shipping within the 48 contiguous United States. PO box
          and military APO/FPO/DPO addresses as well as shipping to Hawaii,
          Alaska or Puerto Rico are not included in this offer.
          <span>
            This offer is a benefit of Adorama VIP360 and valid on all
            qualifying VIP360 customer purchases,
          </span>
          and cannot be combined with additional discounts, closeout sales,
          special offers, flash sales, etc.
        </p>
        <p>
          We may ship products by ground or air; our shipping speeds don't
          correspond to any carrier-branded shipping services. Remember to check
          the ordering cut-off time shown on the detail page. Some orders may
          require a signature.
        </p>
        <p>
          If the item you're ordering is out of stock or unavailable to ship
          immediately, the shipping method time starts when the item ships. For
          example, it will take two business days after an item ships to reach
          you with 2-Day Guaranteed Delivery.
        </p>
        <p>
          To check the shipping charges for different shipping methods or for
          international shipping, please add the items to your shopping cart.
        </p>
        <h5>Dedicated Customer Service</h5>
        <p>
          A team of customer service representatives is dedicated exclusively to
          VIP360 members. To reach them, email VIP360@adorama.com or call
          1-800-811-4001.
        </p>
        <h5>Adorama Protect powered by Extend - VIP360 Protection Plan</h5>
        <p>
          We want your order to be worry-free. VIP360 provides you with a 1-year
          Adorama Protect powered by Extend Protection Plan, including
          accidental damage.
        </p>
        <p>
          With this plan, all new and factory-refurbished products* purchased
          from Adorama during your VIP360 membership term can be repaired or
          replaced at no additional cost, and no deductible. *Limitations apply.
          Review the full terms and conditions here.{" "}
          <a href="https://www.extend.com">See the policy here</a>.
        </p>
        <h5>60-Day Return Policy</h5>
        <p>
          Return shipping is also free. For a Free Shipping label please email
          us at <a href="mailto:webmaster@example.com">VIP360@adorama.com</a> or
          call us <a href="tel:1-800-811-4001">1-800-811-4001</a>.
        </p>
        <h5>
          If a product is received defective or incorrect, please contact us
          immediately and we will do whatever possible to resolve the issue.
        </h5>
        <p>
          The following items cannot be returned once opened: Software, Film,
          Paper, DVDs, Bulbs, Flash Tubes, Batteries, Ink Cartridges, Notebooks,
          Netbooks, Tablets, iPads and Computers, Memory Cards, any item which
          has been removed from its "blister-pack".
        </p>
        <p>
          Printers cannot be returned once toner has been installed.Underwater
          equipment cannot be returned once it has been used in water. Cell
          phones and smart phones will only be accepted for credit or exchange
          if they register less than 10 minutes cumulative talk time and show no
          sign of use.
        </p>
        <p>
          <span>TV Return Policy:</span> Up to and including 47” sealed in the
          original manufacturer box never opened, may be returned. (We recommend
          to apply insurance on shipment),
        </p>
        <p>
          Larger than 47" cannot be returned. In the unlikely event a TV is
          defective the warranty is to be handled thru the manufacturer. When
          your TV is delivered please inspect the TV for any obvious damage. A
          broken or damaged outer box is a first sign that your TV may have been
          damaged in transit. Open the box immediately and inspect your TV. If
          the TV is damaged, have the driver note it on the delivery document
          and contact us immediately to report the damage and file a claim.
        </p>
        <p>
          <span>Refund Policy:</span> Please allow 8 business days from when we
          receive your return to process your refund. You will be notified by
          email once your return is processed. Adorama reserves the right to
          refuse return, refund and/or charge a restocking fee for any product
          that doesn't comply with the above mentioned requirements.
        </p>
        <h5>VIP360 Membership Refunds</h5>
        <p>
          VIP360 membership is eligible for a full refund within 14 days of
          membership purchase if none of the benefits and discounts has been
          used.
        </p>
      </div>
    </section>
  );
}

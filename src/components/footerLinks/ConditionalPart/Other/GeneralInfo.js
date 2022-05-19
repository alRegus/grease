import React from "react";
import { Link } from "react-router-dom";

import classes from "./GeneralInfo.module.scss";

export default function GeneralInfo() {
  return (
    <section className={classes["general-info"]}>
      <h1 id="header-info">General Information</h1>
      <div className={classes["general-info-info"]}>
        <div className={classes["general-info-info-header"]}>
          <h2>General Information</h2>
        </div>
        <div className={classes["general-info-info-body"]}>
          <ul>
            <li>
              <a href="#change-acc-info">
                How Can I View or Change My Account Information?
              </a>
            </li>
            <li>
              <a href="">What Are Your Privacy & Security Policies?</a>
              {/* //!! */}
            </li>
            <li>
              <Link to="/help/termsAndConditions">
                What Are Your Terms & Conditions?
              </Link>
            </li>
            <li>
              <a href="">
                What Happens in the Event of Typographical, Illustration, or
                Price Errors?
              </a>
              {/* //!! */}
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["general-info-info"]}>
        <div className={classes["general-info-info-header"]}>
          <h2>Product information</h2>
        </div>
        <div className={classes["general-info-info-body"]}>
          <ul>
            <li>
              <a href="#refurbished-info">What Are Refurbished Items?</a>
            </li>
            <li>
              <a href="#imported-info">What Are Imported Items?</a>
            </li>
            <li>
              <a href="#open-box-info">What Are Open Box Items?</a>
            </li>
            <li>
              <a href="#claim-info">How Do I Claim a Rebate?</a>
            </li>
            <li>
              <a href="#trade-in-info">How Can I Trade in Equipment?</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["general-info-info"]} id="change-acc-info">
        <div className={classes["general-info-info-header"]}>
          <h2>How Can I View or Change My Account Information?</h2>
          <a href="#header-info">Return to Top</a>
        </div>
        <div className={classes["general-info-info-body"]}>
          <div>
            <p>
              <span>Login</span>
            </p>
            <p>
              To login to your account <Link to="/login">click here</Link>
            </p>
          </div>
          <div>
            <p>
              <span>Create an Account</span>
            </p>
            <p>
              To create an account <Link to="/login">click here</Link>
            </p>
          </div>
          <div>
            <p>
              Still having trouble accessing your account, contact our
              Webmaster.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["general-info-info"]} id="refurbished-info">
        <div className={classes["general-info-info-header"]}>
          <h2>What Are Refurbished Items?</h2>
          <a href="#header-info">Return to Top</a>
        </div>
        <div className={classes["general-info-info-body"]}>
          <div>
            <p>
              <span>Who refurbishes the units?</span>
            </p>
            <p>
              They are all refurbished by the manufacturer (unless specified
              otherwise) to the original company's specifications.
            </p>
          </div>
          <div>
            <p>
              <span>Why does availability seem unpredictable?</span>
            </p>
            <p>
              Unlike new inventory, we can't order refurbs. We have to wait for
              the manufacturers to contact us when they have a batch to sell.
            </p>
          </div>
          <div>
            <p>
              <span>What are the advantages of refurbished goods?</span>
            </p>
            <p>
              All refurbished items will have been checked over by the
              manufacturer by hand, inspected very thoroughly, diagnosed, and
              calibrated by experienced technicians, and could therefore turn
              out to be more dependable than a new item - which will only have
              been checked by a process of systematic quality control protocol
              (ie by random sampling as it comes off the conveyor belt).
            </p>
          </div>
          <div>
            <p>
              <span>What about firmware updates?</span>
            </p>
            <p>
              Refurbished goods are shipped with the firmware updates and latest
              fixes which were completed at whatever stage it was at when we
              took delivery.
            </p>
          </div>
          <div>
            <p>
              <span>
                What type of warranty does Adorama offer on "Refurbished" goods?
              </span>
            </p>
            <p>
              All refurbished products sold by Adorama come with a 90-day
              warranty; the warranty covers anything the manufacturers warranty
              covers for a new unit, including shutter defects.
            </p>
          </div>
          <div>
            <p>
              <span>
                Do I need a warranty certificate for repairs on refurbished
                goods?
              </span>
            </p>
            <p>
              No, your Adorama invoice is all you need to get warranty service
              on refurbished products (or just your order number, for Canon
              refurbs).
            </p>
          </div>
        </div>
      </div>
      <div className={classes["general-info-info"]} id="imported-info">
        <div className={classes["general-info-info-header"]}>
          <h2>What Are Imported Items?</h2>
          <a href="#header-info">Return to Top</a>
        </div>
        <div className={classes["general-info-info-body"]}>
          <div>
            <p>
              <span>What is the Grey Market?</span>
            </p>
            <p>
              "Grey Market," also known as "direct import," are products
              imported directly into the U.S., and not through the
              manufacturer's authorized agent/distributor.
            </p>
          </div>
          <div>
            <p>
              <span>Are "Grey Market" products legally imported?</span>
            </p>
            <p>
              Yes, it is perfectly legal to directly import these products and
              sell them in the U.S.
            </p>
          </div>
          <div>
            <p>
              <span>What are the advantages of "Grey Market" goods?</span>
            </p>
            <p>
              There is no factory-authorized middleman involved in the import of
              these products, so the costs are lower. As a result, the customer
              pays less. In addition, many items that are in short supply or are
              not imported at all by the manufacturer's authorized distributors,
              are available in the "Grey Market."
            </p>
          </div>
          <div>
            <p>
              <span>Are there any disadvantages of "Grey Market" goods?</span>
            </p>
            <p>
              Because there is no factory-authorized middleman, there is no
              manufacturer's warranty. However, "Grey Market" products purchased
              from Adorama are warrantied by Adorama Camera and are returned to
              Adorama Camera for any warranty repair.
            </p>
          </div>
          <div>
            <p>
              <span>Are there product differences in "Grey Market" goods?</span>
            </p>
            <p>
              There is no difference in the actual products. In most cases, they
              are manufactured in the same place by the same people and with the
              same materials. Occasionally, manufacturers will give them a
              different name. For example, the Olympus USA Digital Stylus
              Cameras are called Olympus MJU Cameras in Europe.
            </p>
          </div>
          <div>
            <p>
              <span>
                What type of warranty does Adorama offer on "Grey Market" goods?
              </span>
            </p>
            <p>
              On "Grey Market" products purchased from Adorama, we offer the
              same warranty as the U.S. warrantied products carry, for a period
              of one year. The only difference is that the product would need to
              be shipped to Adorama for warranty service.
            </p>
          </div>
          <div>
            <p>
              <span>
                Do I need a warranty certificate for repairs on "Grey Market"
                goods?
              </span>
            </p>
            <p>
              No, your Adorama invoice is all you need to get warranty service
              on "Grey Market" products.
            </p>
          </div>
          <div>
            <p>
              <span>What happens after the warranty expires?</span>
            </p>
            <p>
              Just like products with an expired manufacturers' warranty, you
              can take the product to any convenient repair shop and pay for the
              repair.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["general-info-info"]} id="open-box-info">
        <div className={classes["general-info-info-header"]}>
          <h2>What Are Open Box Items?</h2>
          <a href="#header-info">Return to Top</a>
        </div>
        <div className={classes["general-info-info-body"]}>
          <div>
            <p>
              Since an item can be marked as "Open Box" for many different
              reasons (i.e., returned without original packaging, writing on the
              original packaging, or manuals, packaging and items opened and
              tested) they may not include all accessories, manuals or original
              packaging. We recommend that you inspect and test the product
              immediately upon receipt. Open Box items are covered under
              original manufacturer's warranty.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["general-info-info"]} id="claim-info">
        <div className={classes["general-info-info-header"]}>
          <h2>How Do I Claim a Rebate?</h2>
          <a href="#header-info">Return to Top</a>
        </div>
        <div className={classes["general-info-info-body"]}>
          <div>
            <p>
              Rebates are honored by the manufacturer who issues them. Adorama
              will provide you with the required information and forms to claim
              a rebate. For a list of rebates and to obtain claim forms.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["general-info-info"]} id="trade-in-info">
        <div className={classes["general-info-info-header"]}>
          <h2>How Can I Trade in Equipment?</h2>
          <a href="#header-info">Return to Top</a>
        </div>
        <div className={classes["general-info-info-body"]}>
          <div>
            <p>
              Adorama pays top dollar for used photo and video equipment. We buy
              all models of cameras, including old half frames and new digital
              format, lenses, and accessories, as well as video and binoculars.
              We will evaluate your equipment and give an honest and fair offer.
            </p>
          </div>
          <div>
            <p>
              To learn the value of your equipment, you can call toll free,
              1-800-223-2500, send a fax to 212-675-8715, email{" "}
              <a href="mailto:webmaster@example.com">used@adorama.com</a>.
            </p>
          </div>
          <div>
            <p>
              You can choose to bring the equipment to our New York store at 42
              West 18th Street, or mail it to:
            </p>
          </div>
          <div>
            <p>Used & Trade Dept.,</p>
          </div>
          <div>
            <p>7 Slater Drive,</p>
          </div>
          <div>
            <p>Elizabeth, NJ 07206.</p>
          </div>
          <div>
            <p>We can also arrange for a free pickup.</p>
          </div>
          <div>
            <p>
              If you accept the offer, we will immediately give you a check. If
              you prefer, you can use it as credit against any Adorama purchase.
              If you don't accept our offer, we'll return the merchandise to
              you, fully insured at our expense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

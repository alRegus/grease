import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Accordion from "./Accordion";
import Modal from "../../../modal/Modal";
import classes from "./StudentsDiscount.module.scss";

const accContent = [
  {
    title: "What products/brands are discounted?",
    content: `<p>
    Select products across product categories are eligible for special
    student discount pricing. For items that are not eligible, you will
    receive the regular low Grease price.
  </p>`,
  },
  {
    title: "How much is the discount?",
    content: `<p>
    The discount varies across the different products and categories.
  </p>`,
  },
  {
    title: "How long will I be verified?",
    content: `<p>Your student verification will last for one full calendar year.</p>`,
  },
  {
    title: ` As a Creators GearUp member, can I participate in the Grease
    Loyalty and Grease Credit Card program(s), including Grease
    Rewards, VIP360 membership, and Grease Edge Credit Card program(s)?`,
    content: ` <p>
    Presently, if you’re a verified Creators GearUp member you will not
    be able to enroll or use the benefits of the Grease Loyalty and
    Credit Card programs, including Grease Rewards, VIP360, and/or
    Grease Edge Credit Card.
  </p>
  <p>
    If you are currently enrolled in any of the above-mentioned
    programs, we recommend that you create a new grease.com account for
    your student profile. Please use an email address separate from the
    one attached to your current account.
  </p>`,
  },
];

export default function StudentsDiscount() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const navigateToLoginHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const modalHandler = () => {
    setModal((prevState) => !prevState);
    document.body.style.overflow = modal ? "scroll" : "hidden";
  };

  return (
    <section className={classes["student"]}>
      <div className={classes["student-heading"]}>
        <div className={classes["student-heading-img"]}></div>
        <div className={classes["student-heading-text"]}>
          <img src="https://i.ibb.co/W02c9tV/logo-white.png" alt="gears-up" />
          <p>
            <span>Join our exclusive</span> college student discount program{" "}
            <span>
              designed to help you get the gear you need for your studies,
              creative passions, and everything in between!
            </span>
          </p>
          <p>
            <span>To unlock your savings,</span> sign up now{" "}
            <span>and verify your student status with SheerID.</span>
          </p>
          <div className={classes["student-heading-text-btn"]}>
            <button onClick={navigateToLoginHandler}>SIGN UP</button>
            <p>
              Already a member? <Link to="/login">Sign in</Link>.
            </p>
          </div>
          <p>
            <span
              className={classes["student-heading-text-modal"]}
              onClick={modalHandler}
            >
              Important information
            </span>{" "}
            for VIP360, Grease Edge card, and Rewards members.
          </p>
        </div>
      </div>
      <div className={classes["student-how"]}>
        <h2>How It Works</h2>
        <div className={classes["student-how-steps"]}>
          <div className={classes["student-how-steps-step"]}>
            <img src="https://i.ibb.co/8Nhn8sP/step-1-blue.png" alt="hit-1" />
            <h4>STEP 1</h4>
            <p>
              Set up an Grease user account. If one already exists-continue to
              log in
            </p>
          </div>
          <div className={classes["student-how-steps-step"]}>
            <img src="https://i.ibb.co/sJx4w3d/step-2-blue.png" alt="hit-2" />
            <h4>STEP 2</h4>
            <p>
              Fill out the Sheer ID online verification application with your
              information.
            </p>
          </div>
          <div className={classes["student-how-steps-step"]}>
            <img src="https://i.ibb.co/8NVKmQj/step-3-blue.png" alt="hit-3" />
            <h4>STEP 3</h4>
            <p>
              After submission you will receive a message to confirm you are
              verified.
            </p>
          </div>
          <div className={classes["student-how-steps-step"]}>
            <img src="https://i.ibb.co/C56qzg9/step-4-blue.png" alt="hit-4" />
            <h4>STEP 4</h4>
            <p>Begin shopping exclusive offers just for YOU!</p>
          </div>
        </div>
      </div>
      <div className={classes["student-connected"]}>
        <div className={classes["student-connected-container"]}>
          {" "}
          <h2>Stay Connected</h2>
          <p>
            Follow us for the latest gear news, expert advice, and inspiration!
          </p>
          <div className={classes["student-connected-container-links"]}>
            <a href="https://www.facebook.com">
              <img src="https://i.ibb.co/XCBgFyw/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src="https://i.ibb.co/1vHknjS/twitter.png" alt="twitter" />
            </a>
            <a href="https://www.instagram.com">
              <img
                src="https://i.ibb.co/j8sXVfJ/instagram.png"
                alt="instagram"
              />
            </a>
            <a href="https://www.youtube.com">
              <img src="https://i.ibb.co/pbJ2yf4/youtube.png" alt="youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className={classes["student-accordion"]}>
        <h2>Frequently Asked Questions</h2>
        {accContent.map(({ title, content }) => {
          return (
            <Accordion
              title={title}
              content={content}
              classDiv={classes["student-accordion-part"]}
              classBtn={classes["active4"]}
              classBorder={classes["border4"]}
              key={title}
            />
          );
        })}
      </div>
      <div className={classes["student-miss"]}>
        <div className={classes["student-miss-container"]}>
          <div className={classes["student-miss-container-text"]}>
            <h2>Don't Miss Out!</h2>
            <p>Sign up today and unlock exclusive savings just for you!</p>
          </div>
          <div className={classes["student-miss-container-button"]}>
            <button>JOIN NOW</button>
            <p>
              Already a member? <Link to="/login">Sign in</Link>.
            </p>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          header="Important information for VIP360, Grease Edge card, and Rewards members."
          TextContent="Presently, you are not able to combine membership in VIP360, Grease Rewards, and Grease Edge credit card benefits with membership in Creators GearUP. If you are currently enrolled in any of these programs, we recommend that you sign up for a new grease.com account for your student profile. Please use an email address separate from the one attached to your current account."
          closeHandler={modalHandler}
        />
      )}
    </section>
  );
}

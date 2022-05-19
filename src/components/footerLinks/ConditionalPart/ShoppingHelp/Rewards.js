import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Accordion from "./Accordion";
import Login from "../../../login-register/Login";
import Register from "../../../login-register/Register";
import ToggleLogin from "../../../login-register/ToggleLogin";
import classes from "./Rewards.module.scss";

const accContent = [
  {
    title: "How do I sign up for Adorama Rewards?",
    content: `<p>
You can join Adorama Rewards at the time of creating your online
Adorama Account (<a href="">Click here</a> to create your online
account now) or when logged into your existing online account.
Plus, you can select to 'Join' during checkout, while reviewing
product details or by visiting
<a href="">adorama.com/g/rewards</a>
</p>
<p>
Enrolling by phone or while shopping in-store is just as simple,
just provide your email to sales representative and confirm
participating to join.
</p> `,
  },
  {
    title: "Who can join Adorama Rewards?",
    content: `<p>
  You can – everyone at the age of 18 or older and a legal resident
  of the United States, you can create an account and earn rewards
  on every qualifying purchase.
</p>
<p>
  VIP360 members and new cardholders of Adorama Edge Credit Card and
  Adorama Financing (Genesis Credit® Account) are automatically
  enrolled. With the exception that verified GearUp members
  currently on the college student discount program are not able to
  combine memberships with other Adorama programs. If you are a
  member on our student discount program and wishes to enroll in
  Adorama Rewards, you will need to create a separate online account
  using a different email address.
</p>`,
  },
  {
    title: "How do I earn Adorama Reward points?",
    content: `<p>
    Adorama Rewards members must log in to your online account when
    shop at Adorama.com in order to earn rewards points on qualifying
    purchases, whether it is for buying equipment in Pro Audio, Video
    or Photography, or any qualified categories. Earning points on
    qualifying purchases is limited to 30,000 per year from the date
    of your first point accumulation on purchases.
  </p>
  <p>
    See all the ways you can earn points: (also can be found on the My
    Account Page)
  </p>
  <ul>
    <li>1 point for every $1 spent in purchases</li>
    <li>25 points when you join Adorama Rewards</li>
    <li>
      50 points when you make your first purchase as a Reward member
    </li>
    <li>
      10 points each when you connect with us on YouTube, Instagram,
      Facebook and Twitter (See the “My Rewards” dashboard on your
      Adorama Account page)
    </li>
    <li>
      25 points when you sign up online to receive offers, product
      news and more via email
    </li>
    <li>
      25 points when you subscribe to our 42West Blog
      for news and reviews by creators, for creators
    </li>
    <li>25 points when you share your birthdate</li>
    <li>
      100 points when you make a 4th purchase in one year (Starting
      from the date of your first purchase)
    </li>
    <li>200 points when you join VIP360</li>
    <li>1,000 points when you refer a friend to purchase</li>
    <li>
      Extra points on select qualifying items, activities, and during
      select limited time promotions
    </li>
    <p>
      Please see complete <a href="">Terms and Conditions</a> for full
      details.
    </p>
  </ul>`,
  },
  {
    title: "Can I get points when I buy in-store or by phone?",
    content: `<p>
  Absolutely. Just provide the email address associated to your
  existing account to the sales representative at the time of
  purchase, or he/she can help to set up your Adorama Rewards
  account if don’t already have one. We’ll see to it that any points
  you earn through phone and in-store purchases are credited to your
  Adorama Rewards account. New members who enrolled on the phone or
  in-store, make sure to also register for an online Adorama Account
  so that you can earn points for your online purchases as well.
</p>`,
  },
  {
    title: "How do I track my Adorama Rewards points?",
    content: `<p>
  It’s easy. Just log into your online Adorama Account, go to the
  “My Rewards” dashboard. There you can see your current point
  balance and a complete history of your reward activity.
</p>`,
  },
  {
    title: "How many points do I need before I can redeem rewards?",
    content: `<p>
  You only need 400 points to earn your first reward – $5 towards
  your next purchase. More points mean bigger rewards. Check back
  regularly to see what new rewards we may offer and how many points
  they require.
</p>`,
  },
  {
    title: "How do I redeem my points when purchasing on Adorama.com?",
    content: `<p>
  All you have to do is log into your account before you make your
  purchase. When you get to the checkout page, look at the “Offers
  and Rewards” section to see the rewards you've accrued that can be
  redeemed. Apply your reward toward your purchase at checkout. It’s
  that simple. For store/phone, provide your email address to the
  sales representation so they can look up your account information
  and apply available Reward points.
</p>`,
  },
  {
    title: "How long does it take for my points to appear?",
    content: ` <div>
  <p>Points for qualifying purchases appear:</p>
  <ul>
    <li>35 days after your order ships</li>
    <li>
      Immediately after your order ships, if you’re a VIP360 member
    </li>
  </ul>
</div>
<div>
  <p>Points for connecting on social media:</p>
  <ul>
    <li>
      Typically within two (2) business days of the qualified
      activity
    </li>
  </ul>
</div>
<div>
  <p>
    Points for joining Adorama Rewards, providing birthdate and/or
    subscribing online to receive offers, product news and to the
    42West Blog via email:
  </p>
  <ul>
    <li>Typically, within completion the qualified activity</li>
  </ul>
</div>
<div>
  <p>Points for becoming a VIP360 member:</p>
  <ul>
    <li>
      Typically, within (4) business days of qualified VIP360
      membership purchase
    </li>
  </ul>
</div>
<div>
  <p>
    Points for making your 4th purchase in one year (starting from
    the day you complete your first purchase):
  </p>
  <ul>
    <li>35 days after the 4th purchase ships</li>
  </ul>
</div>
<div>
  <p>Points when you “Refer a Friend”:</p>
  <ul>
    <li>
      35 days after your friend’s first order ships. Your friend
      gets 1,000 points upon account creation. Invited friend(s)
      must be a new sign up at our website and cannot already have
      an account with us to qualify for 1,000 points.
    </li>
  </ul>
</div>`,
  },
  {
    title: "Do I have to buy something to redeem a reward?",
    content: `<p>
  Yes, we designed the program so you don’t have to complete forms
  to redeem rewards. Simply purchase anything from our vast
  selection and redeem your available points under the payment
  method during checkout.
</p>`,
  },
  {
    title: "What happens to my points if I return a product?",
    content: `<p>
  Any points you earned for the purchase will be deducted from your
  Adorama Rewards balance.
</p>`,
  },
  {
    title: `I just checked my receipt and my point balance. How come I didn’t
  get all the points I thought I would?`,
    content: `<p>One of three things may have happened:</p>
  <ul>
    <li>
      The program awards points for qualifying purchases. Taxes,
      shipping, discounts and promotional gifts don’t earn points.
    </li>
    <li>
      You may not have signed in to your Adorama account. You must be
      signed in at the time of purchase to earn Adorama Rewards
      points.
    </li>
    <li>
      Your points may not be ready to post. It takes 35 days from the
      time your order ships for points to post to your account. If
      you’re a VIP360 member, your points will post when your order
      ships.
    </li>
  </ul>
  <p>
    If you believe there’s a mistake, please call customer service at{" "}
    <a href="">800-223-2500</a> and we’ll be happy to help. We’re here
    Monday – Thursday 9:00am to 7:30pm and Friday 9:00am to 4:00pm.
  </p>`,
  },
  {
    title: `How do I make sure I receive points when I connect with Adorama on
  Social Media?`,
    content: ` <p>
  Be sure to connect through the “My Rewards” dashboard on your
  online Adorama Account page.
</p>`,
  },
  {
    title: "Can I transfer points or combine points from multiple accounts?",
    content: `<p>
  Not at the present time. To keep the program simple and user
  friendly, we designed Adorama Rewards to give you discounts from
  the account where you earn them.
</p>`,
  },
  {
    title: "Do Adorama Reward points expire?",
    content: `<p>
  Points continue to accumulate for as long as you are an Adorama
  customer. If you don’t purchase within 12 months of your last
  purchase you forfeit your points. Be sure to log into your account
  when you make purchases.
</p>`,
  },
  {
    title: "I referred my friend; how come I don’t see any reward points?",
    content: `<p>
  Your friend must be a new customer, opening a new account, and
  places their first order of $50 or more at adorama.com. They
  receive 1,000 points when they open an account, simply because you
  referred them. You receive 1,000 points 35 days after their first
  order ships. Note that if your friend is a current or returning
  customer, these rewards are not available.
</p>`,
  },
  {
    title: `Who can I speak with if I have a question about the Adorama Rewards
  program?`,
    content: ` <p>
  Please contact our Customer Service department at{" "}
  <a href="">800-223-2500</a>. We’re here for you Monday – Thursday
  9:00am to 7:30pm and Friday 9:00am to 4:00pm.
</p>`,
  },
  {
    title: `Can I join Adorama Rewards if I’m a verified GearUp member
  participating in the college student discount program?`,
    content: `<p>
  Presently, Creators GearUp members are not able to combine
  memberships with other Adorama programs (VIP360, Adorama Rewards,
  and Adorama Edge Credit Card). If you are currently enrolled in
  any of these Adorama programs, we recommend that you sign up for a
  new Adorama.com account for your student profile. Please use an
  email address separate from the one attached to your current
  account.
</p>`,
  },
  {
    title: "How do I opt out of Adorama Rewards?",
    content: `<p>
  If you no longer want to be part of the Adorama Rewards program
  you can click the Opt Out button in your <a href="">Profile</a>{" "}
  page. Please note that leaving the program will terminate all the
  Rewards Points you may have earned.
</p>`,
  },
];

export default function Rewards() {
  const signIn = useSelector((state) => state.signIn.signIn);
  return (
    <section className={classes["rewards"]}>
      <div className={classes["rewards-heading"]}>
        <div className={classes["rewards-heading-content"]}>
          <h1>Grease Rewards</h1>
          <h2>GREAT REWARDS, EARNED EASY</h2>
          <p>
            Create an account to join Adorama Rewards, and earn points for
            signing up, shopping, and much more!
          </p>
          <button>
            <a href="#login-rewards">Join Now</a>
          </button>
          <p>
            Already enrolled? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
      <div className={classes["rewards-gearup"]}>
        <h2>Gear Up & Get Rewarded</h2>
        <p>Here’s how it works.</p>
        <div className={classes["rewards-gearup-cards"]}>
          <div className={classes["rewards-gearup-cards-card"]}>
            <img
              src="https://i.ibb.co/djZZC41/Rewards-icon-01-1.png"
              alt="rewards-icon-01"
            />
            <h4>Join Free</h4>
            <p>
              Open a free Adorama account and sign up to join Adorama Rewards*.
            </p>
          </div>
          <div className={classes["rewards-gearup-cards-card"]}>
            <img
              src="https://i.ibb.co/RQMkVMc/Rewards-icon-02-1.png"
              alt="rewards-icon-02"
            />
            <h4>Earn Points</h4>
            <p>Earn points when you shop with us.</p>
          </div>
          <div className={classes["rewards-gearup-cards-card"]}>
            <img
              src="https://i.ibb.co/KqqZMRV/Rewards-icon-03-1.png"
              alt="rewards-icon-03"
            />
            <h4>Redeem Rewards</h4>
            <p>
              Use your points toward purchases made on the phone, online and
              in-store.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["rewards-ads"]}>
        <h2>It All Adds Up</h2>
        <p>So many ways to get rewarded.</p>
        <div className={classes["rewards-ads-cards"]}>
          <div className={classes["rewards-ads-cards-card"]}>
            <img src="https://i.ibb.co/S7x5kkT/Rewards-icon-Join.png" alt="" />
            <p>Join Adorama Rewards</p>
            <hr />
            <span>25</span>
            <p className={classes["rewards-ads-cards-card-points"]}>POINTS</p>
          </div>
          <div className={classes["rewards-ads-cards-card"]}>
            <img src="https://i.ibb.co/zJVGzXc/Rewards-icon-Shop.png" alt="" />
            <p>Shop With Us</p>
            <hr />
            <p className={classes["rewards-ads-cards-card-spec"]}>
              1 point for every $1 spent
            </p>
          </div>
          <div className={classes["rewards-ads-cards-card"]}>
            <img src="https://i.ibb.co/7rcjkv6/Rewards-icon-First.png" alt="" />
            <p>First Member Purchase</p>
            <hr />
            <span>50</span>
            <p className={classes["rewards-ads-cards-card-points"]}>POINTS</p>
          </div>
          <div className={classes["rewards-ads-cards-card"]}>
            <img src="https://i.ibb.co/MMkDqFw/Rewards-icon-Refer.png" alt="" />
            <p>Refer A Friend</p>
            <hr />
            <span>1,000</span>
            <p className={classes["rewards-ads-cards-card-points"]}>
              POINTS EACH
            </p>
          </div>
          <div className={classes["rewards-ads-cards-card"]}>
            <img
              src="https://i.ibb.co/fYRB9g7/Rewards-icon-Subscribe.png"
              alt=""
            />
            <p>Subscribe To Email</p>
            <hr />
            <span>25</span>
            <p className={classes["rewards-ads-cards-card-points"]}>POINTS</p>
          </div>
          <div className={classes["rewards-ads-cards-card"]}>
            <img
              src="https://i.ibb.co/wJYSdnD/Rewards-icon-4times.png"
              alt=""
            />
            <p>Purchase 4 Times</p>
            <hr />
            <span>100</span>
            <p className={classes["rewards-ads-cards-card-points"]}>POINTS</p>
          </div>
          <div className={classes["rewards-ads-cards-card"]}>
            <img
              src="https://i.ibb.co/LrbsQpt/Rewards-icon-Social.png"
              alt=""
            />
            <p>Connect On Social</p>
            <hr />
            <span>10</span>
            <p className={classes["rewards-ads-cards-card-points"]}>
              POINTS EACH
            </p>
          </div>
          <div className={classes["rewards-ads-cards-card"]}>
            <img
              src="https://i.ibb.co/fYRB9g7/Rewards-icon-Subscribe.png"
              alt=""
            />
            <p>Subscribe To Our Blog, 42 West</p>
            <hr />
            <span>25</span>
            <p className={classes["rewards-ads-cards-card-points"]}>POINTS</p>
          </div>
          <div className={classes["rewards-ads-cards-card"]}>
            <img
              src="https://i.ibb.co/z7tpJhR/Rewards-icon-Birthdate.png"
              alt=""
            />
            <p>Share Your Birthdate</p>
            <hr />
            <span>25</span>
            <p className={classes["rewards-ads-cards-card-points"]}>POINTS</p>
          </div>
          <div className={classes["rewards-ads-cards-card"]}>
            <img src="https://i.ibb.co/6P9H2z6/Rewards-icon-Bonus.png" alt="" />
            <p>Bonus Days</p>
            <hr />
            <p className={classes["rewards-ads-cards-card-spec"]}>
              Double Or More Points On Qualifying Items & Activities
            </p>
          </div>
          {/* !!повторяющиеся элементы */}
        </div>
      </div>
      <div className={classes["rewards-more"]}>
        <h2>More Points, More Rewards</h2>
        <p>
          Use your points toward purchase(s) made on the phone, online and
          in-store.
        </p>
        <div className={classes["rewards-more-grid"]}>
          <div className={classes["rewards-more-grid-upper"]}>
            <div className={classes["rewards-more-grid-upper-part"]}>
              <b>$5</b>
              <p>400 POINTS</p>
            </div>
            <div className={classes["rewards-more-grid-upper-part"]}>
              <b>$10</b>
              <p>1,000 POINTS</p>
            </div>
            <div className={classes["rewards-more-grid-upper-part"]}>
              <b>$20</b>
              <p>2,000 POINTS</p>
            </div>
            <div className={classes["rewards-more-grid-upper-part"]}>
              <b>$30</b>
              <p>3,000 POINTS</p>
            </div>
          </div>
          <div className={classes["rewards-more-grid-lower"]}>
            <div className={classes["rewards-more-grid-lower-part"]}>
              <b>$40</b>
              <p>4000 POINTS</p>
            </div>
            <div className={classes["rewards-more-grid-lower-part"]}>
              <b>$50</b>
              <p>5,000 POINTS</p>
            </div>
            <div className={classes["rewards-more-grid-lower-part"]}>
              <b>$100</b>
              <p>10,000 POINTS</p>
            </div>
            <div className={classes["rewards-more-grid-lower-part"]}>
              <b>$200</b>
              <p>20,000 POINTS</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["rewards-login"]} id="login-rewards">
        <ToggleLogin />
        {signIn ? <Login /> : <Register />}
      </div>
      <div className={classes["rewards-perks"]}>
        <h3>GET EVEN MORE PERKS WITH</h3>
        <img src="https://i.ibb.co/BKyR2Xm/VIP360-Logo.png" alt="" />
        <p>
          Enjoy 2-day shipping, extended returns, protection from drops &
          spills—plus, get your Adorama Rewards points upon order shipment. Get
          dedicated customer service and other member-only benefits, all for
          just $49.99 a year.
        </p>
        <Link to="/nspc/vip360">Learn More</Link>
      </div>
      <div className={classes["rewards-faq"]}>
        <h2>FAQ</h2>
        <div>
          {accContent.map(({ title, content }) => {
            return (
              <Accordion
                title={title}
                content={content}
                classDiv={classes["rewards-faq-accordion"]}
                classBorder={classes["border2"]}
                classBtn={classes["active2"]}
              />
            );
          })}
        </div>
      </div>
      <div className={classes["rewards-terms"]}>
        <h2>ADORAMA REWARDS TERMS & CONDITIONS</h2>
        <p>
          Adorama Rewards is a loyalty program offered by Adorama Camera Inc.
          (“Adorama”) to its customers (the “Program”). As a member of the
          Program (“Member”), you will be able to earn Adorama Rewards Points
          (“Points”) which can be redeemed and applied to future purchases
          (“Rewards”).
        </p>
        <strong>
          By enrolling and/or participating in the Program, you agree to the
          following Terms & Conditions:
        </strong>
        <strong>Eligibility</strong>
        <p>
          Only residents of the United States and its territories who are over
          eighteen (18) years of age when he/she registers are eligible to
          become Program Members. Only registered Adorama account (“Account”)
          holders and/or those who provide his/her valid email address when
          making an in-store or phone purchase are eligible to participate in
          the Program and earn Points. The Program is void where prohibited by
          law, and is subject to change as may be necessary to comply with such
          laws or regulations. Member participation is subject to present and
          future Program rules.
        </p>
        <strong>Becoming an Adorama Rewards Program Member</strong>
        <p>
          There are several ways in which an Adorama customer can sign up to be
          a Rewards Program Member:
        </p>
        <p>
          <span>(i) Register an Adorama Account:</span>When registering an
          Adorama Account either online, in-store, or by phone, customers can
          follow the prompts to opt-in to the Rewards Program. To create an
          Account and/or become a Member, applicants are required to supply the
          requested information, including a valid email address, name, and
          password (if applicable). 
        </p>
        <p>
          <span>(ii) Update Adorama Account Settings:</span>If the customer
          already has an Adorama Account, he/she can update his/her Account
          information either online, in-store, or by the phone to opt-in to the
          Rewards Program. In order to opt-in to the Rewards Program, the
          customer will be required to provide a valid email address.
        </p>
        <p>
          <span>(iii) Automatic Enrollment in the Program:</span>VIP360 Members
          will be automatically enrolled in the Program, unless and until such
          Members affirmatively opt-out of the Program, as outlined below.
          Cardholders of Adorama Edge Credit Card Synchrony Bank and/or Adorama
          Financing (Genesis Credit® Account, issued by First Electronic Bank)
          will also be automatically enrolled in the Program, unless and until
          such Members affirmatively opt-out of the Program, as outlined below.
        </p>
        <p>
          There is no purchase or fee required to enroll in the Program or
          become a Member. When Members enroll in the Program, their Membership
          Account will be automatically tied to their email address.
        </p>
        <strong>Exclusions</strong>
        <p>
          Participants in Adorama’s Creators GearUp Program are not eligible to
          participate in the Rewards Program. In addition and without
          limitation, Points may not be earned on purchases made on
          AdoramaRentals Ltd., Adorama Business Solutions, AdorPix LLC., or
          Adorama Learning Center.
        </p>
        <strong>Program Members' Personal Information</strong>
        <p>
          When registering an Account and becoming a Rewards Program Member, you
          agree to receive promotional communications from Adorama. Information
          collected from Account holders and Rewards Program Members is subject
          to Adorama’s Privacy Policy, found at{" "}
          <Link to="/help/privacy">https://www.adorama.com/help/privacy</Link>
        </p>
        <p>
          One Program Membership per person, per registered Account, per valid
          email address.
        </p>
        <p>
          All Member enrollments are subject to verification at any time and for
          any reason. Adorama reserves the right, in its sole and absolute
          discretion, to require proof of identity and/or eligibility (in a form
          acceptable to it; including, without limitation, government issued
          photo identification) for the purposes of verifying an individual’s
          eligibility to participate in the Program; and/or for any other reason
          Adorama deems necessary, in its sole and absolute discretion. Failure
          to provide such proof to the complete satisfaction in a timely manner
          may result in Program disqualification.
        </p>
        <strong>Opt Out</strong>
        <p>
          If at anytime a Member wishes to opt out of the Program, Members can
          change their preferences in their online Account, or request that such
          changes be made by contacting customer service at 800-223-2500.
        </p>
        <strong>Earning Points</strong>
        <p>
          Points may only be earned on eligible purchases made: (1) through a
          registered Adorama Account on the Adorama website at 
          <Link to="/">https://www.adorama.com/</Link>; or (2) over the phone or
          in-store at the Adorama store, located at 42 West 18th St., New York,
          NY 10011, with an authorized Adorama representative, by providing a
          valid email address that will correlate to the purchaser’s Membership
          Account. Without limitation, Points may not be earned on purchases
          made on AdoramaRentals Ltd., Adorama Business Solutions, AdorPix LLC.,
          or Adorama Learning Center.
        </p>
        <p>
          Members must be logged into their Account at the time of purchase to
          earn Points on eligible purchases made through the Adorama website. To
          earn Points on eligible purchases made in-store or over the phone,
          Members will be required to supply the email address that correlates
          to his/her Membership Account at the time of purchase. In addition,
          Points may be earned by completion of certain actions not requiring a
          purchase.
        </p>
        <p>
          There are a number of ways a Member can earn Points (each a
          “Qualifying Activity”). Each Qualifying Activity is detailed below:
        </p>
        <ul>
          <li>
            For every $1 spent on the purchase of a qualifying product
            (“Qualifying Purchase”), Members will earn one (1) Point. Points are
            not earned on tax and shipping expenses, purchases of Adorama Gift
            Cards, or on select products. If an order is cancelled, any Points
            earned for that purchase will be invalidated. Adorama reserves the
            right to invalidate Points earned on purchases that are subsequently
            returned. Earning Points on Qualifying Purchases is limited to
            30,000 Points per year from the date of Member’s first Point
            accumulation from purchases. Adorama reserves the right to adjust
            the maximum Points on purchases at any time. No Points may be earned
            on qualifying product(s) purchased with Reward Value. Adorama will
            post earned Points to Your Account (i) thirty five (35) calendar
            days from the sales transaction confirmation for Qualifying
            Purchases made at a store or by phone; (ii) upon shipment of a
            Qualifying Purchase made online; or (iii) at the time of shipment of
            Qualifying Purchase for VIP360 Members (
            <Link to="/nspc/vip360">https://www.adorama.com/g/VIP360</Link>).
          </li>
          <li>
            Members can earn an additional one hundred (100) Points when they
            make four (4) or more Qualifying Purchases within a twelve (12)
            month period, calculated from the date that the Member joined the
            Program. These Points will be posted to the Member’s Account
            thirty-five (35) days after the fourth Qualifying Purchase ships.
          </li>
          <li>
            Members can earn 1,000 Points for each referred new customer. To
            qualify, Members must submit the email address of a friend they
            would like to refer to the Program. The Member’s friend must meet
            the Eligibility requirements detailed above. If the Member’s friend
            is not already enrolled in the Program and is not an existing
            Adorama Membership Account holder, Adorama will send the Member’s
            friend an invitation to join the Program. Members will receive 1,000
            Points if and when the referred friend creates an Adorama account
            and makes their first Qualifying Purchase of $50 or more on 
            <Link to="/">www.adorama.com</Link> as provided in these Terms and
            Conditions. If the Member’s friend returns the Qualifying Purchase,
            the Member’s Points may be invalidated. These Points will be posted
            to the Member’s Account thirty five (35) calendar days from the
            shipment of the friend’s Qualifying Purchase.
          </li>
          <li>
            Members can also earn Points by following Adorama on Facebook,
            Twitter, YouTube, and Instagram. Members can earn ten (10) Points
            for each follow. Earning Points for following Adorama is limited to
            a total of forty (40) Points (ten (10) Points per platform). In
            order to be eligible for these Points, Members must log into their
            Account and connect via the “My Rewards” dashboard on their Account
            page. These Points will be posted in the Member’s Account within two
            (2) business days of the Qualifying Activity.
          </li>
          <li>
            Members can earn a one time 25 Point bonus when they join the
            Program.
          </li>
          <li>
            Members can earn a one time 200 Point bonus when they purchase a
            membership to become a VIP360 Member. These points will be posted
            typically within four (4) business days of VIP360 membership
            purchase.
          </li>
          <li>
            Members can earn a one time 25 Point bonus when they first opt-in to
            receive 42West email updates.
          </li>
          <li>
            Members can earn a one time 25 Point bonus when they first sign up
            to receive Adorama’s marketing emails.
          </li>
          <li>
            Members can earn a 50 Point bonus when they make their first
            Qualifying Purchase as a Member.
          </li>
          <li>
            Members can earn a one time 25 Point bonus when they provide their
            date of birth on their Account.
          </li>
        </ul>
        <p>
          For any Qualifying Activity, Adorama will attempt to credit Member
          Accounts with the corresponding number of Points on a timely basis, as
          detailed above. Members, however, have the responsibility of making
          sure that their Points are properly credited. Members are asked to
          please retain copies of their purchases and other Qualifying
          Activities for their records. Any claim for Points not credited
          accurately must be received by us within six (6) months of the date of
          claimed accrual of such Points. Members will be able to check the
          number of Points accumulated in their Adorama Account by logging into
          the Adorama “My Account” page and viewing the Rewards dashboard.
        </p>
        <strong>Redeeming Points</strong>
        <p>
          Points may only be redeemed for value to be applied toward qualifying
          products offered by Adorama online at 
          <Link to="/">www.adorama.com</Link>, or with authorized Adorama
          representative(s) in-store or by phone where permitted when Members
          provide the valid e-mail address connected to their Adorama
          Account. Reward Value may not be used for payment of taxes or shipping
          costs. The maximum Reward Value, based on Member’s accrued Points,
          will be applied at checkout. Members must accumulate at least 400
          valid Points before being eligible to redeem Points. Members may
          redeem Points for the corresponding Reward Value amount, as detailed
          below:
        </p>
        <ul>
          <li>
            Accumulate 400 Points: Earn <span>$5 Reward</span>
          </li>
          <li>
            Accumulate 1,000 Points: Earn <span>$10 Reward</span>
          </li>
          <li>
            Accumulate 2,000 Points: Earn <span>$20 Reward</span>
          </li>
          <li>
            Accumulate 3,000 Points: Earn <span>$30 Reward</span>
          </li>
          <li>
            Accumulate 3,500 Points: Earn <span>$35 Reward</span>
          </li>
          <li>
            Accumulate 4,000 Points: Earn <span>$40 Reward</span>
          </li>
          <li>
            Accumulate 4,500 Points: Earn <span>$45 Reward</span>
          </li>
          <li>
            Accumulate 5,000 Points: Earn <span>$50 Reward</span>
          </li>
          <li>
            Accumulate 10,000 Points: Earn <span>$100 Reward</span>
          </li>
          <li>
            Accumulate 20,000 Points: Earn <span>$200 Reward</span>
          </li>
        </ul>
        <p>
          Once Points are posted to a Member’s Account, the Member’s available
          Reward Value will appear at checkout. Members may then elect to apply
          the Reward Value to their purchase. The system will calculate and
          display the Member’s remaining Points after Reward Value is
          redeemed. Points may not be applied to prior purchases or for the
          purchase of Adorama Gift Cards. Adorama may determine, in its sole
          discretion, to restrict the redemption of Points with respect to
          certain products. Except where required by law or provided for in
          these Terms & Conditions, Points have no cash value and no exchange
          rate to any market currency, and are not your property. Other
          restrictions may apply.
        </p>
        <p>
          Reward Value redemption may not be available when checking out in
          Shopping Cart with Apple Pay, Google Pay, PayPal Credit, and
          FlexShopper.
        </p>
        <strong>Expiration of Loyalty Points</strong>
        <p>
          All Points and any correspondent Reward Value on a Member’s Account
          shall expire if no Qualifying Purchase is made through a Member’s
          Account for a period of one (1) year from the date of last
          purchase. Adorama reserves the right to extend the expiration date, in
          its own discretion, on an individual Member basis.
        </p>
        <strong>Participation in the Program</strong>
        <p>
          Adorama may discontinue a Member’s participation in the Program and
          void or cancel a Member’s entire Points balance if a Member does not
          meet the Program eligibility requirements or any Points in a Member’s
          Account are issued, received, or redeemed through fraud or theft, or
          otherwise illegally, or not as authorized in these Terms &
          Conditions. Adorama reserves the right at any time to limit Program
          enrollment.
        </p>
        <p>
          Members agree not to misuse Program privileges by conduct which is
          detrimental to us, including without limitation: attempting to accrue
          Points or redeem Points and/or the correspondent Reward Value in a
          manner inconsistent with our policies or the intent of these Terms &
          Conditions; having multiple Accounts; or participating in purchasing
          or redemption fraud. Points may not be shared or transferred. Points
          that are transferred, bartered or sold will be void and unredeemable.
        </p>
        <strong>The Program May be Suspended, Changed or Terminated</strong>
        <p>
          Adorama reserves the right, at its sole discretion and without prior
          notice, to suspend, change or terminate the Program, in whole or in
          part; to modify, limit or suspend the use of or redemption of Points
          in any respect; to modify or change redemption procedures, including
          the number of Points required for particular Reward Value; to modify,
          limit or suspend the collection of Points, including but not limited
          to imposing time limits and changes in Points values. Adorama may give
          you notice of changes to the Program Terms & Conditions by posting an
          updated version of this page at [
          <Link to="/nspc/rewards">https://www.adorama.com/g/rewards</Link>] or
          via email. Adorama may make these changes even though the changes may
          affect the value of Points already accumulated at any time and from
          time to time. Members understand and agree by participating in the
          Program that Adorama can make these changes at any time, with or
          without notice. If or when the Program is suspended or terminated,
          with or without notice, Member’s then existing Points will be
          converted into the applicable Reward Value and a certificate in the
          amount of that Reward Value will be delivered to Member and may be
          redeemed as permitted in these Rules for a period of six (6) months
          from the issuance date of any such certificate.
        </p>
        <p>
          Members should not rely upon the continued availability of the
          Program, or any earning or redemption offers, or other offers made in
          connection with the Program.
        </p>
        <strong>General Conditions</strong>
        <p>
          Members may opt to purchase products without using their Points or
          Reward Value. Members may not redeem or exchange accumulated Points
          and/or Reward Value for cash. Members may not
          give/donate/transfer/share their Points and/or Reward Value to other
          user’s Accounts.
        </p>
        <p>
          Points will not be awarded if in Adorama’s reasonable opinion the
          merchandise purchased will be used for resale or commercial use and
          any Points awarded on such purchases will be forfeited. Adorama
          reserves the right to limit Points awarded with respect to any offer
          promotion to reasonable household quantities. On a return and/or
          exchange, Points may be deducted from the Members’ Account that were
          used for the original purchase.
        </p>
        <p>
          Adorama’s decisions with respect to all aspects of the Program are
          final and binding on all participants without right of appeal. Any
          attempt by any Member to obtain more than the stated number of Points
          by using multiple/different email addresses, identities, registrations
          and logins, or any other methods will void that Member’s Points. Use
          of any automated system or service to participate is prohibited and
          will result in disqualification. In the event of a dispute as to any
          registration, the authorized account holder of the email address used
          to register will be deemed to be the Member. The “authorized account
          holder” is the natural person assigned an email address by an Internet
          access provider, online service provider or other organization
          responsible for assigning email addresses for the domain associated
          with the submitted address. Any automated computer receipt or
          statement of Account does not constitute proof of actual number of
          Points. Adorama reserves the right to withdraw, amend or suspend the
          Program (or to amend these Terms & Conditions) in any way, in the
          event of an error, technical problem, computer virus, bugs, tampering,
          unauthorized intervention, fraud, technical failure or any other cause
          beyond its reasonable control. Any attempt to deliberately damage or
          to undermine the legitimate operation of the Program in any way is a
          violation of criminal and civil laws and should such an attempt be
          made, and Adorama reserves the right to seek remedies and damages to
          the fullest extent permitted by law.
        </p>
        <strong>Privacy</strong>
        <p>
          By participating in the Program, each Member expressly consents to the
          storing, sharing and using the personal information in accordance with
          the privacy policy found at 
          <Link to="/">https://www.adorama.com/</Link>.
        </p>
        <strong>Dispute Resolution</strong>
        <p>
          Adorama hopes to answer all your questions and most concerns can be
          resolved quickly and to your satisfaction by contacting us at 
          800-223-2500. If, however, there is an issue that needs to be resolved
          it must be resolved through final, binding arbitration. This
          obligation applies regardless of whether the claim or dispute involves
          a tort, fraud, breach of contract, misrepresentation, product
          liability, negligence, violation of a statute, or any other legal
          theory.  Included are all claims arising out of or relating to any
          aspect of our relationship; claims that may arise after the
          termination of this agreement. All arbitrations shall be conducted on
          an individual (and not a class-wide) basis and an arbitrator shall
          have no authority to award class-wide relief.  You acknowledge and
          agree that this specifically prohibits you from commencing arbitration
          proceedings as a representative of others or joining in any
          arbitration proceedings brought by any other person.
        </p>
        <p>
          <span>
            {" "}
            Member agrees that (1) any and all disputes and causes of action
            arising out of or connected with the Program, shall be resolved
            individually, without resort to any form of class action, and
            exclusively by final and binding arbitration under the rules of JAMS
            and held at the JAMS regional office nearest the Member; (2) the
            Federal Arbitration Act shall govern the interpretation, enforcement
            and all proceedings at such arbitration; and (3) judgment upon such
            arbitration award may be entered in any court having jurisdiction.
            Under no circumstances will any Member be permitted to obtain awards
            for, and Member hereby waives all rights to claim, punitive,
            incidental or consequential damages, or any other damages, including
            attorneys' fees, other than Member's actual out-of-pocket expenses
            (i.e., costs associated with participating in the Program), and
            Member further waives all rights to have damages multiplied or
            increased. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATIONS OR
            EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO
            THE ABOVE MAY NOT APPLY TO YOU. All issues and questions concerning
            the construction, validity, interpretation and enforceability of
            these Official Rules, or the rights and obligations of the Member
            and Sponsor in connection with the Program, shall be governed by,
            and construed in accordance with, the laws of the State of New York,
            without giving effect to any choice of law or conflict of law rules
            (whether of the State of New York or any other jurisdiction), which
            would cause the application of the laws of any jurisdiction other
            than the State of New York.
          </span>
        </p>
        <p>
          <span>
            {" "}
            Members are advised that California Civil Code § 1542 provides that:
            A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR
            RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT
            THE TIME OF EXECUTING THE RELEASE, AND THAT IF KNOWN BY HIM WOULD
            HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR OR RELEASED
            PARTY. By participating in the Program, Members, on behalf of
            himself/herself and his/her heirs, successors, assigns, agents and
            representatives, acknowledges that he/she understands the
            significance and consequences of California Civil Code § 1542 and,
            to the extent it may be applicable, hereby waives the benefits of
            its provisions, with the intent that the releases and waivers of
            liability in this section shall include claims known or unknown, and
            unknown and unsuspected.
          </span>
        </p>
        <strong>Questions:</strong>
        <p>
          In the event of any discrepancy or inconsistency between these Terms &
          Conditions and any other statement contained in any Program-related
          materials, these Terms & Conditions shall prevail, govern and control
          to the fullest extent permitted by law.
        </p>
        <p>
          Members may review their Account information at  
          <Link to="/">https://www.adorama.com</Link>.
        </p>
        <p>
          If you have any questions regarding the Program, Adorama can be
          contacted by phone at  800-223-2500.
        </p>
      </div>
    </section>
  );
}

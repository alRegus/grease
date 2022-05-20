import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./AboutUs.module.scss";

export default function AboutUs() {
  const navigate = useNavigate();

  const navigateToProductListHandler = () => {
    navigate("/products-list");
  };
  const navigateTo42Handler = () => {
    window.location.href = "https://www.linkedin.com/company/42west";
  };

  return (
    <section className={classes["about"]}>
      <div className={classes["about-heading"]}>
        <h1>Grease</h1>
      </div>
      <div className={classes["about-creativity"]}>
        <div className={classes["about-creativity-container"]}>
          <h2>Equip Your Creativity</h2>
          <div className={classes["about-creativity-container-list"]}>
            <div className={classes["about-creativity-container-list-part"]}>
              <h3>Our Mission</h3>
              <p>
                We believe everyone is a creator. Our mission is to inspire,
                educate and equip to make dreams a reality.
              </p>
            </div>
            <div className={classes["about-creativity-container-list-part"]}>
              <h3>Our Vision</h3>
              <p>Be an integral part of every creator’s success story.</p>
            </div>
            <div className={classes["about-creativity-container-list-part"]}>
              <h3>Our Pledge</h3>
              <p>Keep you inspired and connected to our pros and your peers.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["about-way"]}>
        <h2>We See It Your Way</h2>
        <p>
          If you’re going to manifest your creative vision, you need the right
          equipment. At Adorama, our store has been an icon for New York City’s
          creatives since 1974.{" "}
          <Link to="/info/history">Read more about our history</Link>.
        </p>
        <p>
          Shop Adorama for a powerhouse lineup of cameras, lenses,
          cinematography gear, studio lighting, tripods, pro audio, computers,
          printers, and every cutting-edge accessory you need to create
          triumphant work.
        </p>
        <button onClick={navigateToProductListHandler}>Shop Now</button>
      </div>
      <div className={classes["about-eye"]}>
        <h2>More Than Meets the Eye</h2>
        <p>
          Your art is our passion, and we are here to supply you with
          state-of-the-art equipment and the significant support of people who
          want you to succeed.
        </p>
        <p>
          We’ve dedicated ourselves at Adorama to providing you with it all. Our
          creative community includes hundreds of pros who share their skills,
          opinions, and favorite gear with you.
        </p>
        <p>
          Watch exclusive shows, tutorials, and online events, go behind the
          scenes on real photo and video shoots, and join invitational groups to
          help you build your craft and meet your peers.
        </p>
        <button onClick={navigateTo42Handler}>Learn More At 42 West</button>
      </div>
      <div className={classes["about-promise"]}>
        <h2>The Adorama Promise</h2>
        <p>
          We’re here for you with the best in video, camera, and audio, plus
          complete customer service, tailored to your every need.
        </p>
        <div className={classes["about-promise-benefits"]}>
          <div className={classes["about-promise-benefits-part"]}>
            <i className="fa-solid fa-tag"></i>
            <h4>BUY ONLINE</h4>
            <p>
              Get deep details on equipment. Learn, compare, and hear from pros.
              Read reviews and ask questions.
            </p>
          </div>
          <div className={classes["about-promise-benefits-part"]}>
            <i className="fa-solid fa-city"></i>
            <h4>SHOP IN STORE</h4>
            <p>
              Test the gear. Get specs and recommendations from our kind,
              knowledgeable staff.{" "}
              <Link to="/info/store">Visit our NYC store</Link>.
            </p>
          </div>
          <div className={classes["about-promise-benefits-part"]}>
            <i className="fa-solid fa-medal"></i>
            <h4>EARN REWARDS</h4>
            <p>
              Shopping at Adorama is always rewarding with our point-based{" "}
              <Link to="/nspc/rewards">loyalty program</Link>, and even more
              perks with our <Link to="/nspc/vip360">VIP360 membership</Link>.
            </p>
          </div>
          <div className={classes["about-promise-benefits-part"]}>
            <i className="fa-solid fa-comment"></i>
            <h4>CONNECT WITH US</h4>
            <p>
              You can chat with us on our site, on social media, and during our
              live in-store events.
            </p>
          </div>
          <div className={classes["about-promise-benefits-part"]}>
            <i className="fa-solid fa-address-card"></i>
            <h4>GET SUPPORT</h4>
            <p>
              In the unlikely event of an issue with your order or if you have
              questions, we’re here for you. Call us at
              <a href="tel:800-223-2500">800-223-2500 </a> or{" "}
              <a href="mailto:webmaster@example.com">email </a> us anytime.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["about-brand"]}>
        <div className={classes["about-brand-item"]}>
          <img src="https://i.ibb.co/LdG81Mv/about-abs.jpg" alt="about-abs" />
          <div className={classes["about-brand-item-header"]}>
            <h2>Grease</h2>
            <span>BUSINESS SOLUTION</span>
          </div>
          <p>
            Adorama's B2B division provides consultative sales and technical
            services to design, install and support the unique technology needs
            of businesses, educational institutions and government agencies.
          </p>
          <a href="https://bsd.md/en">Learn More</a>
        </div>
        <div className={classes["about-brand-item"]}>
          <img src="https://i.ibb.co/tc9qYTW/about-arc.jpg" alt="about-arc" />
          <div className={classes["about-brand-item-header"]}>
            <h2>Grease</h2>
            <span>RENTAL COMPANY</span>
          </div>
          <p>
            You can rent professional filmmaking equipment and audio gear from
            the Adorama Rental Co. in Manhattan or Brooklyn. Get what you need
            for the duration of your project. Renting is also a great way to
            test out gear before you buy.
          </p>
          <a href="https://www.rentalcars.com">Start Renting</a>
        </div>
        <div className={classes["about-brand-item"]}>
          <img
            src="https://i.ibb.co/WGBsP9f/about-trade.jpg"
            alt="about-trade"
          />
          <div className={classes["about-brand-item-header"]}>
            <h2>Grease</h2>
            <span>TRADE</span>
          </div>
          <p>
            We pay top dollar for your used photo and video equipment. If you
            are ready to upgrade your system or you have equipment that you
            would like to turn into cash, we're here to help with a wide
            selection, accurate ratings, and industry experts to assist.
          </p>
          <a href="https://en.wikipedia.org/wiki/Trading_company">Learn More</a>
        </div>
        <div className={classes["about-brand-item"]}>
          <img
            src="https://i.ibb.co/k1zpzn6/about-printique.jpg"
            alt="about-printique"
          />
          <div className={classes["about-brand-item-header"]}>
            <h2>Grease</h2>
            <span>PRINTIQUE</span>
          </div>
          <p>
            We produce pro-quality prints with excellent white-glove service,
            all at an affordable price.
          </p>
          <a href="https://ceramictoner.com">Get Started</a>
        </div>
        <div className={classes["about-brand-item"]}>
          <img
            src="https://i.ibb.co/BT7kVv8/about-42-west.jpg"
            alt="about-42-west"
          />
          <div className={classes["about-brand-item-header"]}>
            <h2>Grease</h2>
            <span>42 WEST</span>
          </div>
          <p>
            Empower your creativity with tips, tricks, and inspiration from our
            pros. Renowned directors, photographers, and audio professionals
            share their expertise with you in our blog. Get reviews,
            recommendations, and event invites.
          </p>
          <a href="https://www.linkedin.com/company/42west">Read More</a>
        </div>
        <div className={classes["about-brand-item"]}>
          <img src="https://i.ibb.co/FwCnjdh/about-jobs.jpg" alt="about-jobs" />
          <div className={classes["about-brand-item-header"]}>
            <h2>WORKING AT ADORAMA</h2>
          </div>
          <p>
            Join us as we support creatives around the world with equipment
            sales, rentals, and education. We work in New York and New Jersey
            and serve customers around the world.
          </p>
          <a href="https://www.rabota.md">See open positions</a>
        </div>
      </div>
    </section>
  );
}

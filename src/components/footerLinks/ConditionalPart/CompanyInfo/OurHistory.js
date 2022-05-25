import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./OurHistory.module.scss";

export default function OurHistory() {
  const [year, setYear] = useState("1970s");
  const [opacity, setOpacity] = useState(false);
  const [navClickYear, setNavClickYear] = useState("1970s");

  /* const elemRef = useRef();
  useEffect(() => {
    console.log(elemRef.current.clientHeight);
  });
 */
  /*  const yearHandler = (e) => {
    setYear(e.target.closest("div").children[0].textContent);
    setOpacity(false);
  }; */

  const opacityHandler = (e) => {
    const year = e.target.closest("div").children[0].textContent;
    setOpacity(true);
    setNavClickYear(year);
  };

  const bottomYearHandler = (e) => {
    setNavClickYear(
      e.target.closest("span") ? e.target.closest("span").textContent : year
    );
    setOpacity(true);
    window.scrollTo({ top: 550, left: 0, behavior: "smooth" });
  };

  const activeStyle = { borderBottom: "4px solid #000", color: "#000" };

  return (
    <section className={classes["history"]}>
      <div className={classes["history-img"]}></div>
      <h1>Our History</h1>
      <h2>This is our story</h2>
      <nav className={classes["history-nav"]}>
        <div
          className={classes["history-nav-item"]}
          //onClick={yearHandler}
          onClick={opacityHandler}
          style={year === "1970s" ? activeStyle : null}
        >
          <strong>1970s</strong>
          <span>The Photography People</span>
        </div>
        <div
          className={classes["history-nav-item"]}
          //onClick={yearHandler}
          onClick={opacityHandler}
          style={year === "1980s" ? activeStyle : null}
        >
          <strong>1980s</strong>
          <span>New Visions</span>
        </div>
        <div
          className={classes["history-nav-item"]}
          //onClick={yearHandler}
          onClick={opacityHandler}
          style={year === "1990s" ? activeStyle : null}
        >
          <strong>1990s</strong>
          <span>A Digital Revolution</span>
        </div>
        <div
          className={classes["history-nav-item"]}
          //onClick={yearHandler}
          onClick={opacityHandler}
          style={year === "2000s" ? activeStyle : null}
        >
          <strong>2000s</strong>
          <span>A Cultural Shift</span>
        </div>
        <div
          className={classes["history-nav-item"]}
          //onClick={yearHandler}
          onClick={opacityHandler}
          style={year === "2010s" ? activeStyle : null}
        >
          <strong>2010s</strong>
          <span>More Than a Camera Store</span>
        </div>
        <div
          className={classes["history-nav-item"]}
          //onClick={yearHandler}
          onClick={opacityHandler}
          style={year === "2020s" ? activeStyle : null}
        >
          <strong>2020s</strong>
          <span>Creative Connections</span>
        </div>
      </nav>
      <hr />
      {year === "1970s" && (
        <div
          className={
            opacity
              ? `${classes["hide"]} ${classes["history-part"]}`
              : classes["history-part"]
          }
          id={classes["history-part-one"]}
          onTransitionEnd={() => {
            setYear(navClickYear);
            setOpacity(false);
          }}
          /* ref={elemRef} */
        >
          <div className={classes["history-part-containers"]}>
            <h2>1974</h2>
            <img
              src="https://i.ibb.co/5h5LpSx/first-adorama-store-34th-street-sm.jpg"
              alt="first-adorama-store-34th-street-sm"
            />
            <p>
              We open our original store on 34th Street in New York City. Known
              as “The Photography People,” we're here for a new creative class
              that's watching technology hit some important milestones.
            </p>
            <p>
              The first versions of personal computers and even texting are in
              beta, but there's no Internet yet, so we take mail orders from
              around the country, up to 200 per day.
            </p>
            <div
              className={classes["history-part-containers-years"]}
              onClick={bottomYearHandler}
            >
              <strong>
                &lt; <span>2020s</span>
              </strong>
              <strong>
                <span>1980s</span> &gt;
              </strong>
            </div>
          </div>
        </div>
      )}
      {year === "1980s" && (
        <div
          className={
            opacity
              ? `${classes["hide"]} ${classes["history-part"]}`
              : classes["history-part"]
          }
          id={classes["history-part-two"]}
          onTransitionEnd={() => {
            setYear(navClickYear);
            setOpacity(false);
          }}
        >
          <div className={classes["history-part-containers"]}>
            <h2>1982</h2>
            <img
              src="https://i.ibb.co/QK3prsF/construction-bw-sm.jpg"
              alt="construction-bw-sm"
            />
            <p>
              Pros come to us looking for more features and better equipment.
              The technology is emerging, with cameras, audio equipment, and
              lighting all growing in demand.
            </p>
            <p>The Adorama Rental Co. (ARC) opens on 18th Street.</p>
          </div>
          <div className={classes["history-part-containers"]}>
            <h2>1983</h2>
            <p>
              As our inventory develops, we start to get to know some of the
              city's best photographers and videographers.
            </p>
            <p>
              We start forming strong relationships with passionate creatives
              that eventually inspire the Adorama Learning Center.
            </p>
          </div>
          <div className={classes["history-part-containers"]}>
            <h2>1988</h2>
            <img
              src="https://i.ibb.co/YQJcTtn/adorama-18th-purple-awning-sm.jpg"
              alt="adorama-18th-purple-awning-sm"
            />
            <p>
              The Adorama Rental Co. is a hub of creative energy. Our inventory
              is expanding, and the rental space is growing. We move the store
              to 42 W. 18th St.
            </p>
            <p>It's still the flagship store you visit today.</p>
            <p>
              We're excited to have room for our cameras, an extended range of
              lenses, dark-room projectors, and more.
            </p>
            <div
              className={classes["history-part-containers-years"]}
              onClick={bottomYearHandler}
            >
              <strong>
                &lt; <span>1970s</span>
              </strong>
              <strong>
                <span>1990s</span> &gt;
              </strong>
            </div>
          </div>
        </div>
      )}
      {year === "1990s" && (
        <div
          className={
            opacity
              ? `${classes["hide"]} ${classes["history-part"]}`
              : classes["history-part"]
          }
          id={classes["history-part-three"]}
          onTransitionEnd={() => {
            setYear(navClickYear);
            setOpacity(false);
          }}
        >
          <div className={classes["history-part-containers"]}>
            <h2>1997</h2>
            <img
              src="https://i.ibb.co/tLwSnSL/adorama-pix-digital-photo-lab-sm.jpg"
              alt="adorama-pix-digital-photo-lab-sm"
            />
            <p>
              AdoramaPix launches. Now, you can personalize gifts with your
              photos.
            </p>
            <p>
              Better yet, professional photographers can use us as a vendor for
              pro-quality printing and fast delivery.
            </p>
          </div>
          <div className={classes["history-part-containers"]}>
            <h2>1998</h2>
            <img
              src="https://i.ibb.co/q9xS2F7/adoramas-first-website-sm.jpg"
              alt="adoramas-first-website-sm"
            />
            <p>The company launches Adorama.com to take online orders.</p>
            <p>
              We open our catalogue of brands and products to nation-wide
              audiences.
            </p>
            <div
              className={classes["history-part-containers-years"]}
              onClick={bottomYearHandler}
            >
              <strong>
                &lt; <span>1980s</span>
              </strong>
              <strong>
                <span>2000s</span> &gt;
              </strong>
            </div>
          </div>
        </div>
      )}
      {year === "2000s" && (
        <div
          className={
            opacity
              ? `${classes["hide"]} ${classes["history-part"]}`
              : classes["history-part"]
          }
          id={classes["history-part-four"]}
          onTransitionEnd={() => {
            setYear(navClickYear);
            setOpacity(false);
          }}
        >
          <div className={classes["history-part-containers"]}>
            <h2>2005</h2>
            <img
              src="https://i.ibb.co/FJX5xNS/adorama-warehouse-shipping-sm.jpg"
              alt="adorama-warehouse-shipping-sm"
            />
            <p>
              Adorama opens a warehouse in New Jersey, expanding our inventory
              and continuing to build the brand.
            </p>
            <p>
              We continue to carry high-demand equipment while expanding all of
              our available stock, in-store and online.
            </p>
            <div
              className={classes["history-part-containers-years"]}
              onClick={bottomYearHandler}
            >
              <strong>
                &lt; <span>1990s</span>
              </strong>
              <strong>
                <span>2010s</span> &gt;
              </strong>
            </div>
          </div>
        </div>
      )}
      {year === "2010s" && (
        <div
          className={
            opacity
              ? `${classes["hide"]} ${classes["history-part"]}`
              : classes["history-part"]
          }
          id={classes["history-part-five"]}
          onTransitionEnd={() => {
            setYear(navClickYear);
            setOpacity(false);
          }}
        >
          <div className={classes["history-part-containers"]}>
            <h2>2011</h2>
            <p>
              It's a banner year for us. We're “More Than A Camera Store” with
              expanded product offerings in computers, home electronics, and
              more.
            </p>
            <p>
              We host our first Adorama Street Fair, taking over 18th Street
              between Fifth and Sixth Avenues. The event is a technology
              showcase and carnival, drawing the photography community together
              for a day in Chelsea.
            </p>
            <img
              src="https://i.ibb.co/wdFxkLs/adorama-street-fair-sm.jpg"
              alt="adorama-street-fair-sm"
            />
            <p>
              That same year, we become the official photography and electronics
              equipment supplier for the New York Giants.
            </p>
            <img
              src="https://i.ibb.co/YNDZfb2/adorama-electronics-dealer-ny-giants-sm.jpg"
              alt="adorama-electronics-dealer-ny-giants-sm"
            />
          </div>
          <div className={classes["history-part-containers"]}>
            <h2>2014</h2>
            <img
              src="https://i.ibb.co/tz21vvx/store-pro-services-sm.jpg"
              alt="store-pro-services-sm"
            />
            <p>
              We're expanding into pro audio equipment, partnering with brands
              like Sennheisser, Shure, Rode, Zoom, and more to bring musical
              instruments, plus home and professional audio.
            </p>
          </div>
          <div className={classes["history-part-containers"]}>
            <h2>2016</h2>
            <img
              src="https://i.ibb.co/hY7LZJ9/nigel-barker-top-photographer-sm.jpg"
              alt="nigel-barker-top-photographer-sm"
            />
            <p>
              World-famous photographer, musician and reality TV host Nigel
              Barker joins us to host Top Photographer With Nigel Barker, a
              five-episode reality competition series on AdoramaTV.
            </p>
            <p>
              The winner, Scott Borrero, goes on to have a successful career as
              a commercial photographer, working with high-profile international
              brands to create purposeful, impact-driven content.
            </p>
          </div>
          <div className={classes["history-part-containers"]}>
            <h2>2017</h2>
            <img
              src="https://i.ibb.co/vBmdPrd/arc-brooklyn-inside-sm.jpg"
              alt="arc-brooklyn-inside-sm"
            />
            <p>
              We open our second location of The Adorama Rental Co. in Brooklyn.
            </p>
            <p>
              We've staffed 18,000 square feet, two checkout rooms, 10 checkout
              bays and two loading docks with New York City's best cinema,
              photography, and audio equipment experts and on-site support.
            </p>
            <p>
              In the fall, we launch Adorama Business Solutions to serve
              schools, government institutions and enterprise-level businesses.
            </p>
            <p>
              We offer hundreds of thousands of products from more than 2,200
              brands, plus our unparalleled expertise, service, and competitive
              pricing.
            </p>
          </div>
          <div className={classes["history-part-containers"]}>
            <h2>2018</h2>
            <img
              src="https://i.ibb.co/xfwGrx5/adorama-inspire-doors-sm.jpg"
              alt="adorama-inspire-doors-sm"
            />
            <p>
              Our Inspire annual event launches during an inaugural weekend in
              Chelsea and beyond.
            </p>
            <p>
              This dynamic creative workshop event spans three days of trying
              new gear, attending panels, learning from the industry's best
              talent, and tons of networking.
            </p>
            <div
              className={classes["history-part-containers-years"]}
              onClick={bottomYearHandler}
            >
              <strong>
                &lt; <span>2000s</span>
              </strong>
              <strong>
                <span>2020s</span> &gt;
              </strong>
            </div>
          </div>
        </div>
      )}
      {year === "2020s" && (
        <div
          className={
            opacity
              ? `${classes["hide"]} ${classes["history-part"]}`
              : classes["history-part"]
          }
          id={classes["history-part-six"]}
          onTransitionEnd={() => {
            setYear(navClickYear);
            setOpacity(false);
          }}
        >
          <div className={classes["history-part-containers"]}>
            <h2>2020</h2>
            <img
              src="https://i.ibb.co/JjjNDJG/equip-your-creativity-sm.jpg"
              alt="equip-your-creativity-sm"
            />
            <p>
              We are here to serve the creators. With a renewed mission to{" "}
              <Link to="/info/aboutUs">equip your creativity</Link>, Adorama is
              here to equip you with the ultimate in photography, filmmaking,
              audio, technology, and more.
            </p>
            <div
              className={classes["history-part-containers-years"]}
              onClick={bottomYearHandler}
            >
              <strong>
                &lt; <span>2010s</span>
              </strong>
              <strong>
                <span>1970s</span> &gt;
              </strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

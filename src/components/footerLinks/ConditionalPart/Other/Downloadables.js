import React from "react";

import classes from "./Downloadables.module.scss";

export default function Downloadables() {
  return (
    <section className={classes["downloadables"]}>
      <h1>Downloadables</h1>
      <div className={classes["downloadables-body"]}>
        <div>
          <p>
            <span>Purchasing Downloadable Software</span>
          </p>
          <p>
            For your convenience, Adorama offers a variety of downloadable
            software that can be purchased on the Adorama site. To purchase
            these items, simply add them to the cart and check out as you would
            any other product. Within a few hours of your purchase, you will
            receive an email with the download link and activation key (if
            applicable).
          </p>
          <p>
            Currently downloadable software is only available for orders within
            the US
          </p>
        </div>
        <div>
          <p>
            <span>Downloading Software</span>
          </p>
          <p>
            After placing an order for downloadable software please allow 3-4
            hours before getting the download link. Once you get an email with a
            download link and activation-key (if applicable), click on the link
            and follow instructions and enter Key if requested. If, for any
            reason, you are not able to download from the email copy and paste
            the URL directly into the browser.
          </p>
        </div>
        <div>
          <p>
            <span>Installing Software</span>
          </p>
          Installing a downloaded software is the same as installing from a CD
          and should be as simple as following the on-screen instructions. If
          you are unable to install your software, please contact Adorama
          Customer Service and we will be happy to assist you.<p></p>
        </div>
        <div>
          <p>
            <span>Activating Software</span>
          </p>
          <p>
            During the installation process you will be asked for the activation
            key located in the download email. Enter the key in (making note of
            0 (Zeros) vs o and I (i) vs l (ell)). If for some reason the key is
            not working please feel free to contact us.
          </p>
        </div>
      </div>
    </section>
  );
}

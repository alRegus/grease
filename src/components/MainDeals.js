import React from "react";
import useHttp from "../hooks/useHttp";

import classes from "./MainDeals.module.scss";

const MainDeals = function () {
  const instrumentDeals = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/allProducts.json"
  );

  console.log(instrumentDeals);

  const deals = instrumentDeals.filter((instrument) => instrument.deals);
  const filteredToSixDeals = deals.filter((_, i) => i <= 5);
  console.log(filteredToSixDeals);
  const displayDeals = filteredToSixDeals.map((instrument) => (
    <div className={classes["deals-container"]} key={instrument.id}>
      <img src={instrument.productImgUrl} alt={instrument.name} />
      <span>{instrument.name}</span>
    </div>
  ));

  return (
    <section className={classes["deals"]}>
      <h2>Explore Deals &#8594;</h2>
      <div className={classes["deals-list"]}>{displayDeals}</div>
    </section>
  );
};

export default MainDeals;

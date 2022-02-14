import React from "react";
import useHttp from "../../hooks/useHttp";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./MainDeals.module.scss";

const MainDeals = function () {
  const instrumentDeals = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/allProducts.json"
  );
  const dispatch = useDispatch();

  const deals = instrumentDeals.filter((instrument) => instrument.deals);
  const filteredToSixDeals = deals.filter((_, i) => i <= 5);

  const displayDeals = filteredToSixDeals.map((instrument) => (
    <Link to={`/product/${instrument.id}`} key={instrument.id}>
      <div className={classes["deals-container"]}>
        <img src={instrument.productImgUrl} alt={instrument.name} />
        <span>{instrument.name}</span>
      </div>
    </Link>
  ));

  const dealsHandler = () => {
    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: "",
        used: false,
        deals: true,
        brand: "",
      },
    });
  };

  return (
    <section className={classes["deals"]}>
      <Link to="/products-list">
        <h2 onClick={dealsHandler}>Explore Deals &#8594;</h2>
      </Link>
      <div className={classes["deals-list"]}>{displayDeals}</div>
    </section>
  );
};

export default MainDeals;

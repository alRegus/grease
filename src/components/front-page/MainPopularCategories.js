import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./MainPopularCategories.module.scss";
import useHttp from "../../hooks/useHttp";

export default function MainPopularCategories() {
  const instrumentTypes = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/types.json"
  );
  const dispatch = useDispatch();

  const typesHandler = (e) => {
    const typeValue = e.target.closest("div").lastElementChild.textContent;

    dispatch({
      type: "SET_FILTER_PARAMS",
      payload: {
        name: "",
        categories: "",
        type: [typeValue],
        used: false,
        deals: false,
        brand: [],
        priceRange: [],
        rating: [],
        discount: [],
      },
    });
  };

  const displayInstrumentTypes = instrumentTypes.map((type) => (
    <Link to="/products-list" key={type.typeName}>
      <div className={classes["cat-container"]} onClick={typesHandler}>
        <img
          src={`https://i.ibb.co/${type.typeImgCode}/${type.typeName}.jpg`}
          alt={type.typeName}
        />
        <span>
          {type.typeName
            .split("-")
            .map((word) => {
              return word.charAt(0).toUpperCase() + word.substring(1);
            })
            .join(" ")}
        </span>
      </div>
    </Link>
  ));

  return (
    <div className={classes["popular-categories"]}>
      <h2>Explore Categories</h2>
      <section className={classes["cat-list"]}>
        {displayInstrumentTypes}
      </section>
    </div>
  );
}

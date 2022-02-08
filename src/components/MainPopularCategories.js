import React from "react";

import classes from "./MainPopularCategories.module.scss";
import useHttp from "../hooks/useHttp";

export default function MainPopularCategories() {
  const instrumentTypes = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/types.json"
  );

  const displayInstrumentTypes = instrumentTypes.map((type) => (
    <div className={classes["cat-container"]} key={type.typeName}>
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

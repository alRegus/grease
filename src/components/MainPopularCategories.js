import React from "react";
import Carousel from "nuka-carousel";

import classes from "./MainPopularCategories.module.scss";
import useHttp from "../hooks/useHttp";

export default function MainPopularCategories() {
  const types = useHttp(
    "https://musical-instruments-c9bcf-default-rtdb.europe-west1.firebasedatabase.app/types.json"
  );
  console.log(types);
  return (
    <div>
      <p>Check</p>
    </div>
  );
}

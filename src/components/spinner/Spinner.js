import React from "react";

import classes from "./Spinner.module.scss";

export default function Spinner() {
  return (
    <div className={classes["lds-roller"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

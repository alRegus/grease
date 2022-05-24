import React from "react";

import classes from "./Backdrop.module.scss";

export default function Backdrop({ closeHandler }) {
  return <div className={classes["backdrop"]} onClick={closeHandler}></div>;
}

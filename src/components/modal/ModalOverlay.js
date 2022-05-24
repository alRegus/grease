import React from "react";

import classes from "./ModalOverlay.module.scss";

export default function ModalOverlay({
  header,
  TextContent,
  addedContent,
  closeHandler,
}) {
  return (
    <div className={classes["modal-overlay"]}>
      <i onClick={closeHandler} className="fa-solid fa-xmark"></i>
      <h2>{header}</h2>
      <p>{TextContent}</p>
      <div>{addedContent}</div>
    </div>
  );
}

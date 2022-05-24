import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

export default function Modal({
  header,
  TextContent,
  addedContent,
  closeHandler,
}) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeHandler={closeHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          header={header}
          TextContent={TextContent}
          addedContent={addedContent}
          closeHandler={closeHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

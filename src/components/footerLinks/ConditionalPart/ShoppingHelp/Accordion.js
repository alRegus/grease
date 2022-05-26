import React, { useState } from "react";

export default function Accordion({
  title,
  content,
  classDiv,
  classBtn,
  classBorder,
}) {
  const [accordion, setAccordion] = useState(false);

  const accordionHandler = () => {
    setAccordion((prevState) => !prevState);
  };

  return (
    <div className={classDiv}>
      <button
        className={accordion ? classBtn : null}
        style={accordion ? { borderBottom: "0px" } : null}
        onClick={accordionHandler}
      >
        {title}
      </button>
      {accordion && (
        <div
          className={accordion ? classBorder : null}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  );
}

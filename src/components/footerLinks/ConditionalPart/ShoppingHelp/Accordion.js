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
          /* style={accordion ? { borderBottom: " 1px solid #4a5865" } : null} */
          className={accordion ? classBorder : null}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  );
}

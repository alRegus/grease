import React from "react";

export default function HelpPart({ icon, header, description, linkTo }) {
  return (
    <li>
      <a href={linkTo}>
        <i className={icon}></i>
        <div>
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
}

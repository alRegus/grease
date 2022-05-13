import React from "react";
import { Link } from "react-router-dom";

export default function HelpPart({ icon, header, description, linkTo }) {
  return (
    <li>
      <Link to={linkTo}>
        <i className={icon}></i>
        <div>
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
}

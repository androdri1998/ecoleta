import React from "react";
import { Link } from "react-router-dom";
import { IPropsRender } from "./types";

import "./styles.css";

const PanelRender: React.FC<IPropsRender> = ({
  title,
  description,
  urlToRedirect,
  buttonIcon,
  buttonText,
}) => {
  return (
    <main className="main__panel">
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to={urlToRedirect}>
        <span>{buttonIcon}</span>
        <strong>{buttonText}</strong>
      </Link>
    </main>
  );
};

export default PanelRender;

import React from "react";
import { IPropsRender } from "./types";

import "./styles.css";

const ButtonDefaultRender: React.FC<IPropsRender> = ({
  onClickButton,
  textButton,
  type,
  disabled,
}) => {
  return (
    <button
      type={type ? type : "button"}
      disabled={disabled}
      className={`button__button-default ${
        disabled ? "disabled__button-default" : ""
      }`}
      onClick={onClickButton}
    >
      {textButton}
    </button>
  );
};

export default ButtonDefaultRender;

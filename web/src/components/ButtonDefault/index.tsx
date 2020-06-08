import React from "react";
import ButtonDefaultRender from "./ButtonDefaultRender";
import { IPropsIndex } from "./types";

const ButtonDefault: React.FC<IPropsIndex> = ({
  textButton,
  onClickButton,
  type,
  disabled,
}) => {
  return (
    <ButtonDefaultRender
      textButton={textButton}
      onClickButton={onClickButton}
      type={type}
      disabled={disabled}
    />
  );
};

export default ButtonDefault;

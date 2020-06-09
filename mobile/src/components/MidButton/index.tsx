import React from "react";

import { IPropsIndex } from "./types";

import MidButtonRender from "./MidButtonRender";

const MidButton: React.FC<IPropsIndex> = ({
  iconButton,
  textButton,
  onClickButon,
}) => {
  return (
    <MidButtonRender
      iconButton={iconButton}
      textButton={textButton}
      onClickButon={onClickButon}
    />
  );
};

export default MidButton;

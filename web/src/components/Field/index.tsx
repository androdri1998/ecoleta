import React from "react";

import FieldRender from "./FieldRender";
import { IPropsIndex } from "./types";

const Field: React.FC<IPropsIndex> = ({
  htmlFor,
  nameLabel,
  type,
  nameInput,
  idInput,
  onChangeInput,
}) => {
  return (
    <FieldRender
      htmlFor={htmlFor}
      nameLabel={nameLabel}
      type={type}
      nameInput={nameInput}
      idInput={idInput}
      onChangeInput={onChangeInput}
    />
  );
};

export default Field;

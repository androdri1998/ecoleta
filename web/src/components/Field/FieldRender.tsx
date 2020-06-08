import React from "react";
import { IPropsRender } from "./types";

import "./styles.css";

const FieldRender: React.FC<IPropsRender> = ({
  htmlFor,
  nameLabel,
  type,
  nameInput,
  idInput,
  onChangeInput,
}) => {
  return (
    <div className="field__field">
      <label htmlFor={htmlFor}>{nameLabel}</label>
      <input
        onChange={onChangeInput}
        type={type}
        name={nameInput}
        id={idInput}
      />
    </div>
  );
};

export default FieldRender;

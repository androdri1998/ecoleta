import React from "react";
import { IPropsRender } from "./types";

import "./styles.css";

const FieldSelectRender: React.FC<IPropsRender> = ({
  data,
  htmlFor,
  labelName,
  idInput,
  nameInput,
  value,
  onChangeSelect,
  nameOptionDefault,
}) => {
  return (
    <div className="field__field-select">
      <label htmlFor={htmlFor}>{labelName}</label>
      <select
        name={nameInput}
        id={idInput}
        value={value}
        onChange={onChangeSelect}
      >
        <option value="">{nameOptionDefault}</option>
        {data.map((itemData) => (
          <option key={itemData.key} value={itemData.value}>
            {itemData.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FieldSelectRender;

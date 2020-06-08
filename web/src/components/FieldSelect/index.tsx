import React from "react";
import FieldSelectRender from "./FieldSelectRender";
import { IPropsIndex } from "./types";

const FieldSelect: React.FC<IPropsIndex> = ({
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
    <FieldSelectRender
      data={data}
      htmlFor={htmlFor}
      labelName={labelName}
      idInput={idInput}
      nameInput={nameInput}
      value={value}
      onChangeSelect={onChangeSelect}
      nameOptionDefault={nameOptionDefault}
    />
  );
};

export default FieldSelect;

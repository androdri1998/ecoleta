import React from "react";

import { IPropsIndex } from "./types";

import PickerRender from "./PickerRender";

const Picker: React.FC<IPropsIndex> = ({ items, onValueChange, labelName }) => {
  return (
    <PickerRender
      items={items}
      onValueChange={onValueChange}
      labelName={labelName}
    />
  );
};

export default Picker;

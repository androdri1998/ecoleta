import React from "react";
import { View, Image, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { styles, pickerSelectStyles } from "./styles";
import { IPropsRender } from "./types";
import RNPickerSelect from "react-native-picker-select";

const PickerRender: React.FC<IPropsRender> = ({
  items,
  onValueChange,
  labelName,
}) => {
  return (
    <RNPickerSelect
      Icon={() => (
        <Icon
          style={{ marginTop: 16, marginRight: 10 }}
          name="chevron-down"
          size={20}
          color="#607d8b"
        />
      )}
      style={pickerSelectStyles}
      placeholder={{ label: labelName }}
      onValueChange={onValueChange}
      items={items}
    />
  );
};

export default PickerRender;

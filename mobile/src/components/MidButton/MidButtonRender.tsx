import React from "react";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { IPropsRender } from "./types";

const MidButtonRender: React.FC<IPropsRender> = ({
  onClickButon,
  textButton,
  iconButton,
}) => {
  return (
    <RectButton style={styles.button} onPress={onClickButon}>
      {iconButton}
      <Text style={styles.buttonText}>{textButton}</Text>
    </RectButton>
  );
};

export default MidButtonRender;

import React from "react";
import { View, Image, Text } from "react-native";

import { styles } from "./styles";
import { IPropsRender } from "./types";

const PanelRender: React.FC<IPropsRender> = ({ title, description }) => {
  return (
    <View style={styles.main}>
      <Image source={require("../../assets/logo.png")} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default PanelRender;

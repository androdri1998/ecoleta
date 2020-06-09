import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";

import { styles } from "./styles";
import { IPropsRender } from "./types";

import Panel from "../../components/Panel";
import Picker from "../../components/Picker";

const HomeRender: React.FC<IPropsRender> = ({
  ufs,
  handleSelectUf,
  cities,
  handleSelectCity,
  disabled,
  onPressEnter,
}) => {
  const { t } = useTranslation();
  return (
    <ImageBackground
      source={require("../../assets/home-background.png")}
      style={styles.container}
      imageStyle={{
        height: 368,
        width: 274,
      }}
    >
      <Panel
        description={t("DESCRIPTION_PAGE_HOME")}
        title={t("TITLE_PAGE_HOME")}
      />
      <View style={styles.footer}>
        <Picker
          labelName={t("PICKER_UF_PAGE_HOME")}
          items={ufs}
          onValueChange={(value) => handleSelectUf(value)}
        />
        <Picker
          labelName={t("PICKER_CITY_PAGE_HOME")}
          items={cities}
          onValueChange={(value) => handleSelectCity(value)}
        />
        <RectButton
          style={[styles.button, disabled ? styles.buttonDisabled : {}]}
          onPress={onPressEnter}
        >
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#fff" />
            </Text>
          </View>
          <Text style={styles.buttonText}>{t("ENTER_PAGE_HOME")}</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default HomeRender;

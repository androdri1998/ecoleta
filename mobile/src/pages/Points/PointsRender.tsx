import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import { IPropsRender } from "./types";
import ListItems from "../../components/ListItems";
import MapPoints from "../../components/MapPoints";

import { styles } from "./styles";

const PointsRender: React.FC<IPropsRender> = ({
  city,
  uf,
  handlerNavigationBack,
  handlerSelectItems,
  selectedItems,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlerNavigationBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Text style={styles.title}>{t("TITLE_PAGE_POINTS")}</Text>
        <Text style={styles.description}>{t("DESCRIPTION_PAGE_POINTS")}</Text>
        <MapPoints city={city} items={selectedItems} uf={uf} />
      </View>

      <ListItems onChangeItems={handlerSelectItems} />
    </>
  );
};

export default PointsRender;

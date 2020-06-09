import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

import { IPropsRender } from "./types";

import { styles } from "./styles";
import MidButton from "../../components/MidButton";

const DetailRender: React.FC<IPropsRender> = ({
  handlerNavigationBack,
  data,
  handleWhatsapp,
  handleComposerMail,
}) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlerNavigationBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Image
          style={styles.pointImage}
          source={{
            uri: data.point.image_url,
          }}
        />

        <Text style={styles.pointName}>{data.point.name}</Text>
        <Text style={styles.pointItems}>
          {data.items.map((item) => item.title).join(", ")}
        </Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>{data.point.city}</Text>
          <Text style={styles.addressContent}>{data.point.uf}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <MidButton
          iconButton={<FontAwesome name="whatsapp" size={20} color="#fff" />}
          onClickButon={handleWhatsapp}
          textButton={t("WHATSAPP_PAGE_DETAILS")}
        />
        <MidButton
          iconButton={<Icon name="mail" size={20} color="#fff" />}
          onClickButon={handleComposerMail}
          textButton={t("EMAIL_PAGE_DETAILS")}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailRender;

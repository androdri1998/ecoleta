import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
  Linking,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import * as MailComposer from "expo-mail-composer";

import { IParams, IData } from "./types";
import api from "../../services/api";

import { styles } from "./styles";

const Points: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState<IData>({} as IData);

  const routeParams = route.params as IParams;

  function handlerNavigationBack() {
    navigation.goBack();
  }

  useEffect(() => {
    const loadPoint = async (point_id: number) => {
      const response = await api.get(`/points/${point_id}`);
      setData(response.data);
    };
    loadPoint(routeParams.pointId);
  }, [routeParams.pointId]);

  function handleComposerMail() {
    MailComposer.composeAsync({
      subject: "Interesse na coleta de residuos",
      recipients: [data.point.email],
    });
  }

  function handleWhatsapp(whatsapp: string) {
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
  }

  if (!data.point) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlerNavigationBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Image
          style={styles.pointImage}
          source={{
            uri: data.point.image,
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
        <RectButton
          style={styles.button}
          onPress={() => handleWhatsapp(data.point.whatsapp)}
        >
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleComposerMail}>
          <Icon name="mail" size={20} color="#fff" />
          <Text style={styles.buttonText}>Email</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Points;

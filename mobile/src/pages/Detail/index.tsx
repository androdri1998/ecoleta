import React, { useEffect, useState } from "react";
import { Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import { IParams, IData, IPropsIndex } from "./types";
import api from "../../services/api";

import DetailRender from "./DetailRender";

const Detail: React.FC<IPropsIndex> = () => {
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
    <DetailRender
      handleWhatsapp={() => handleWhatsapp(data.point.whatsapp)}
      data={data}
      handlerNavigationBack={handlerNavigationBack}
      handleComposerMail={handleComposerMail}
    />
  );
};

export default Detail;

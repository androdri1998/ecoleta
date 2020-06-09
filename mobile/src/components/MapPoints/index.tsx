import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useTranslation } from "react-i18next";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

import { IPropsIndex, IPoint, ILoadPoints } from "./types";
import api from "../../services/api";
import MapPointsRender from "./MapPointsRender";

const MapPoints: React.FC<IPropsIndex> = ({ items, uf, city }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [points, setPoints] = useState<IPoint[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  useEffect(() => {
    const loadPosition = async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Ooopss...", t("ALERT_PERMISSION_PAGE_POINTS"));
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      setInitialPosition([latitude, longitude]);
    };

    loadPosition();
  }, []);

  useEffect(() => {
    const loadPoints = async ({ city, uf, items }: ILoadPoints) => {
      let getItems = {};
      if (items && items.length > 0) {
        getItems = Object.assign(getItems, { items: items.join(",") });
      }
      if (city) {
        getItems = Object.assign(getItems, { city });
      }
      if (uf) {
        getItems = Object.assign(getItems, { uf });
      }

      const response = await api.get("/points", {
        params: { ...getItems },
      });
      setPoints(response.data.results);
    };

    loadPoints({ city: city, uf: uf, items: items });
  }, [city, uf, items]);

  function handleNavigationToDetail(id: number) {
    navigation.navigate("Detail", {
      pointId: id,
    });
  }

  return (
    <MapPointsRender
      initialPosition={initialPosition}
      handleNavigationToDetail={handleNavigationToDetail}
      points={points}
    />
  );
};

export default MapPoints;

import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { SvgUri } from "react-native-svg";
import * as Location from "expo-location";

import api from "../../services/api";
import { IItem, IPoints, IParams, ILoadPoints } from "./types";

import { styles } from "./styles";

const Points: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [items, setItems] = useState<IItem[]>([]);
  const [points, setPoints] = useState<IPoints[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const routeParams = route.params as IParams;

  useEffect(() => {
    const loadPosition = async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Ooopss...",
          "Need of the your permission to get the location."
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      setInitialPosition([latitude, longitude]);
    };

    loadPosition();
  }, []);

  useEffect(() => {
    const loadItems = async () => {
      const response = await api.get("/items");
      setItems(response.data.results);
    };

    loadItems();
  }, []);

  useEffect(() => {
    const loadPoints = async ({ city, uf, items }: ILoadPoints) => {
      let getItems = {};
      if (items.length > 0) {
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

    const { city, uf } = routeParams;
    loadPoints({ city, uf, items: selectedItems });
  }, [routeParams.city, routeParams.uf, selectedItems]);

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  function handlerNavigationBack() {
    navigation.goBack();
  }

  function handleNavigationToDetail(id: number) {
    navigation.navigate("Detail", {
      pointId: id,
    });
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlerNavigationBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Text style={styles.title}>Welcome</Text>
        {/* bem vindo */}
        <Text style={styles.description}>
          find a collection point on the map.
          {/* encontre no map um ponto de coleta */}
        </Text>

        <View style={styles.mapContainer}>
          {initialPosition[0] !== 0 && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map((point) => (
                <Marker
                  key={String(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                  onPress={() => handleNavigationToDetail(point.id)}
                >
                  <View style={styles.mapMarkerContainer}>
                    <Image
                      style={styles.mapMarkerImage}
                      source={{
                        uri: point.image,
                      }}
                    />
                    <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                  </View>
                </Marker>
              ))}
            </MapView>
          )}
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {items.map((item) => (
            <TouchableOpacity
              key={String(item.id)}
              style={[
                styles.item,
                selectedItems.includes(item.id) ? styles.selectedItem : {},
              ]}
              onPress={() => handleSelectItem(item.id)}
              activeOpacity={0.6}
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Points;

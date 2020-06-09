import React from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles";
import { IPropsRender } from "./types";

const MapPointsRender: React.FC<IPropsRender> = ({
  initialPosition,
  handleNavigationToDetail,
  points,
}) => {
  return (
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
                    uri: point.image_url,
                  }}
                />
                <Text style={styles.mapMarkerTitle}>{point.name}</Text>
              </View>
            </Marker>
          ))}
        </MapView>
      )}
    </View>
  );
};

export default MapPointsRender;

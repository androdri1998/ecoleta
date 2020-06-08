import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

import { IPropsRender } from "./types";

import "./styles.css";

const MapRender: React.FC<IPropsRender> = ({
  initialPosition,
  handleClickMap,
  selectedPosition,
}) => {
  return (
    <Map center={initialPosition} zoom={15} onClick={handleClickMap}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={selectedPosition} />
    </Map>
  );
};

export default MapRender;

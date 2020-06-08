import React from "react";
import MapRender from "./MapRender";
import { IPropsIndex } from "./types";

const Map: React.FC<IPropsIndex> = ({
  initialPosition,
  handleClickMap,
  selectedPosition,
}) => {
  return (
    <MapRender
      initialPosition={initialPosition}
      handleClickMap={handleClickMap}
      selectedPosition={selectedPosition}
    />
  );
};

export default Map;

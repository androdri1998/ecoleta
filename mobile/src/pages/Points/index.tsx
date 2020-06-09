import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { IParams, IPropsIndex } from "./types";

import PointsRender from "./PointsRender";

const Points: React.FC<IPropsIndex> = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const routeParams = route.params as IParams;

  function handlerNavigationBack() {
    navigation.goBack();
  }

  function handlerSelectItems(items: number[]) {
    setSelectedItems(items);
  }

  return (
    <PointsRender
      city={routeParams.city}
      handlerNavigationBack={handlerNavigationBack}
      handlerSelectItems={handlerSelectItems}
      selectedItems={selectedItems}
      uf={routeParams.uf}
    />
  );
};

export default Points;

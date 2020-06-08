import React, { useState, useEffect } from "react";

import api from "../../services/api";
import ListItemsRender from "./ListItemsRender";
import { IPropsIndex, IItem } from "./types";

const ListItems: React.FC<IPropsIndex> = ({ onChangeItems }) => {
  const [items, setItems] = useState<IItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      const response = await api.get("/items");
      setItems(response.data.results);
    };

    loadItems();
  }, []);

  useEffect(() => {
    onChangeItems(selectedItems);
  }, [selectedItems, onChangeItems]);

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex(
      (item: number) => item === id
    );
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item: number) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  return (
    <ListItemsRender
      handleSelectItem={handleSelectItem}
      items={items}
      selectedItems={selectedItems}
    />
  );
};

export default ListItems;

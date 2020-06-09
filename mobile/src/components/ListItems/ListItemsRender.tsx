import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { SvgUri } from "react-native-svg";

import { styles } from "./styles";
import { IPropsRender } from "./types";

const ListItemsRender: React.FC<IPropsRender> = ({
  items,
  handleSelectItem,
  selectedItems,
}) => {
  return (
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
  );
};

export default ListItemsRender;

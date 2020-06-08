import React from "react";
import { IPropsRender } from "./types";

import "./styles.css";

const ListItemsRender: React.FC<IPropsRender> = ({
  items,
  selectedItems,
  handleSelectItem,
}) => {
  return (
    <ul className="items-grid__list-items">
      {items.map((item) => (
        <li
          key={item.id}
          className={selectedItems.includes(item.id) ? "selected" : ""}
          onClick={() => handleSelectItem(item.id)}
        >
          <img src={item.image_url} alt={item.title} />
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListItemsRender;

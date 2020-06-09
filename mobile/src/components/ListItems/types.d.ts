export interface IPropsIndex {
  onChangeItems: Function;
}

export interface IPropsRender {
  items: IItem[];
  selectedItems: number[];
  handleSelectItem: Function;
}

export interface IItem {
  id: number;
  image_url: string;
  title: string;
}

export interface IItem {
  id: number;
  image_url: string;
  title: string;
}
export interface IPropsIndex {
  onChangeItems: Function;
}

export interface IPropsRender {
  items: IItem[];
  selectedItems: number[];
  handleSelectItem: Function;
}

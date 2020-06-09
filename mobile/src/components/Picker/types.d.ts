export interface IPropsIndex {
  onValueChange: (value: any, index: number) => void;
  items: {
    key: string;
    label: string;
    value: string;
  }[];
  labelName: string;
}

export interface IPropsRender {
  onValueChange: (value: any, index: number) => void;
  items: {
    key: string;
    label: string;
    value: string;
  }[];
  labelName: string;
}

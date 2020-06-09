export interface IHandleToPoints {
  city: string;
  uf: string;
}

export interface IUf {
  id: number;
  sigla: string;
  nome: string;
}

export interface ICity {
  id: number;
  name: string;
}

export interface ICityResponse {
  id: number;
  nome: string;
}

export interface IPropsIndex {}

export interface IPropsRender {
  ufs: {
    key: string;
    label: string;
    value: string;
  }[];
  handleSelectUf: Function;
  cities: {
    key: string;
    label: string;
    value: string;
  }[];
  handleSelectCity: Function;
  disabled: boolean;
  onPressEnter: (pointerInside: boolean) => void;
}

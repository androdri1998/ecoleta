import { FormEvent } from "react";

export interface IItem {
  id: number;
  image_url: string;
  title: string;
}

export interface IUf {
  id: number;
  sigla: string;
  nome: string;
}

export interface ICityResponse {
  id: number;
  nome: string;
}

export interface IDataSelect {
  key: string;
  text: string;
  value: string;
}

export interface IDataSelect {
  key: string;
  text: string;
  value: string;
}

export interface IPropsIndex {}

export interface IPropsRender {
  handleSubmit: DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;
  onSelectedFile: Function;
  handleInputChange: Function;
  initialMapPosition: [number, number];
  selectedMapPosition: [number, number];
  handleClickMap: Function;
  handleSelectUf: Function;
  selectedUf: string;
  ufs: IDataSelect[];
  handleSelectCity: Function;
  selectedCity: string;
  cities: IDataSelect[];
  handleSelectItem: Function;
  disabledSubmit: boolean;
}

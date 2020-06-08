import { InputHTMLAttributes } from "react";

export interface IPropsIndex {
  htmlFor: string;
  labelName: string;
  nameInput: string;
  idInput: string;
  value: string | number;
  onChangeSelect: DetailedHTMLProps<
    InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  nameOptionDefault: string;
  data: {
    key: string;
    text: string;
    value: string;
  }[];
}

export interface IPropsRender {
  htmlFor: string;
  labelName: string;
  nameInput: string;
  idInput: string;
  value: string | number;
  onChangeSelect: DetailedHTMLProps<
    InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  nameOptionDefault: string;
  data: {
    key: string;
    text: string;
    value: string;
  }[];
}

import { InputHTMLAttributes } from "react";

export interface IPropsIndex {
  nameLabel: string;
  onChangeInput: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  type: string;
  nameInput: string;
  idInput: string;
  htmlFor: string;
}

export interface IPropsRender {
  nameLabel: string;
  onChangeInput: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  type: string;
  nameInput: string;
  idInput: string;
  htmlFor: string;
}

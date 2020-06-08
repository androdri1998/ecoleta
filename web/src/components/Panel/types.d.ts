import { IconType } from "react-icons";

export interface IPropsIndex {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: Element<IconType>;
  urlToRedirect: string;
}

export interface IPropsRender {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: Element<IconType>;
  urlToRedirect: string;
}

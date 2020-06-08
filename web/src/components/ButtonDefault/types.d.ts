type typeButton = "button" | "submit" | "reset" | undefined;

export interface IPropsIndex {
  textButton: string;
  type?: typeButton;
  disabled?: boolean;
  onClickButton?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

export interface IPropsRender {
  textButton: string;
  type?: typeButton;
  disabled?: boolean;
  onClickButton?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

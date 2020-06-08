import React from "react";
import PanelRender from "./PanelRender";
import { IPropsIndex } from "./types";

const Panel: React.FC<IPropsIndex> = ({
  title,
  description,
  urlToRedirect,
  buttonIcon,
  buttonText,
}) => {
  return (
    <PanelRender
      title={title}
      description={description}
      urlToRedirect={urlToRedirect}
      buttonIcon={buttonIcon}
      buttonText={buttonText}
    />
  );
};

export default Panel;

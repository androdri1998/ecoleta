import React from "react";

import { IPropsIndex } from "./types";

import PanelRender from "./PanelRender";

const Panel: React.FC<IPropsIndex> = ({ title, description }) => {
  return <PanelRender title={title} description={description} />;
};

export default Panel;

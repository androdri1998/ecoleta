import React from "react";
import HeaderRender from "./HeaderRender";
import { IPropsIndex } from "./types";

const Header: React.FC<IPropsIndex> = ({ rigthNav }) => {
  return <HeaderRender rigthNav={rigthNav} />;
};

export default Header;

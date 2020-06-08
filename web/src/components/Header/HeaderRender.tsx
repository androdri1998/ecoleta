import React from "react";
import { IPropsRender } from "./types";
import logo from "../../assets/logo.svg";

import "./styles.css";

const HeaderRender: React.FC<IPropsRender> = ({ rigthNav }) => {
  return (
    <header className="header__header">
      <img src={logo} alt="Ecoleta" />
      {rigthNav}
    </header>
  );
};

export default HeaderRender;

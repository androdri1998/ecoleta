import React from "react";
import { FiLogIn } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import { IPropsRender } from "./types";
import Header from "../../components/Header";
import Panel from "../../components/Panel";

import "./styles.css";

const HomeRender: React.FC<IPropsRender> = () => {
  const { t } = useTranslation();
  return (
    <div id="page-home">
      <div className="content">
        <Header />
        <Panel
          title={t("TITLE_PAGE_HOME")}
          description={t("DESCRIPTION_PAGE_HOME")}
          urlToRedirect="/create-point"
          buttonIcon={<FiLogIn />}
          buttonText={t("BUTTON_TEXT_PAGE_HOME")}
        />
      </div>
    </div>
  );
};

export default HomeRender;

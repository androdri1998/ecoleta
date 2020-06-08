import React from "react";
import { useTranslation } from "react-i18next";

import { IPropsRender } from "./types";

import Header from "../../components/Header";
import ButtonDefault from "../../components/ButtonDefault";

import "./styles.css";

const SuccessCreatePointRender: React.FC<IPropsRender> = ({ handleSubmit }) => {
  const { t } = useTranslation();

  return (
    <div id="page-success-create-point">
      <Header />
      <main>
        <h1>{t("SUCCESS_TEXT_PAGE_SUCCESS")}</h1>
        <ButtonDefault
          onClickButton={handleSubmit}
          textButton={t("BACK_TO_HOME_PAGE_SUCCESS")}
        />
      </main>
    </div>
  );
};

export default SuccessCreatePointRender;
